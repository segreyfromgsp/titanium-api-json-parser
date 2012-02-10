package ru.net.gsp.jsoner;

import static ru.net.gsp.jsoner.PW.*;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

/**
 * @author segrey
 */
public class Main {
    private static final String SECTION = "{}";
    private static final List<String> PLATFORMS = Arrays.asList("iphone", "android");

    public static void main(final String[] args) {
        try {
            final File file;
            if (args.length < 1) {
                System.err.println("No file path passed");
                System.exit(1);
            }
            file = resolveFile(args[0], false);

            final String platform;
            if (args.length > 1) {
                platform = args[1].toLowerCase();
                if (!PLATFORMS.contains(platform)) {
                    System.err.println("Wrong platform. Available values are:");
                    for (final String pf : PLATFORMS) System.err.println(pf);
                    System.exit(1);
                }
            } else {
                platform = null;
            }

            final File outFile = args.length > 2 ? resolveFile(args[2], true) : null;
            if (outFile != null) PW.set(new PrintWriter(outFile));
            loadJson(file, platform);
        } catch (final Exception e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static File resolveFile(final String arg, final boolean create) throws IOException {
        final File file;
        file = new File(arg);
        boolean created = false;
        if (!file.exists()) {
            if (create) {
                created = file.createNewFile();
            }
        } else {
            created = true;
        }
        if (!created) {
            System.err.println("File " + file.getAbsolutePath() + " not exists");
            System.exit(1);
        }
        if (file.isDirectory()) {
            System.err.println("Wrong file path");
            System.exit(1);
        }
        return file;
    }

    private static void loadJson(final File file, final String platform) throws Exception {
        long st = System.currentTimeMillis();

        System.out.println("Loading JSON document");
        final Map<String, Object> tree = new TreeMap<String, Object>();
        final JsonNode rootNode = new ObjectMapper().readValue(file, JsonNode.class);
        final Iterator<String> objects = rootNode.getFieldNames();
        System.out.println("Document loaded in " + (System.currentTimeMillis() - st) + " ms.");

        st = System.currentTimeMillis();
        while (objects.hasNext()) {
            final String objOrigName = objects.next();
            final String objName = ti(objOrigName);
            final String[] nTree = objName.contains(".") ? objName.split("\\.") : new String[]{objName};

            final JsonNode objNode = rootNode.get(objOrigName);
            if (!isForPlatform(objNode, platform)) continue;

            final Map<String, Object> branch = resolveApiBranch(tree, nTree, 0);
            if (!branch.containsKey(SECTION)) throw new Exception("Bad API branch: " + objName);

            final ApiClass obj = (ApiClass) branch.get(SECTION);

            if (objNode.has(Entity.PROPERTY.listName)) {
                final Iterator<JsonNode> props = objNode.get(Entity.PROPERTY.listName).getElements();
                while (props.hasNext()) {
                    final JsonNode p = props.next();
                    if (!isForPlatform(p, platform)) continue;
                    obj.addProperty(new ApiProperty(p));
                }
            }

            if (objNode.has(Entity.METHOD.listName)) {
                final Iterator<JsonNode> meths = objNode.get(Entity.METHOD.listName).getElements();
                while (meths.hasNext()) {
                    final JsonNode m = meths.next();
                    if (!isForPlatform(m, platform)) continue;
                    obj.addMethod(new ApiMethod(m, objName));
                }
            }
        }

        System.out.println("Tree constructed in " + (System.currentTimeMillis() - st) + " ms.");
        System.out.println();

        st = System.currentTimeMillis();
        writeTree(tree, 0);
        System.out.println();
        System.out.println("Tree written in " + (System.currentTimeMillis() - st) + " ms.");

        PW.close();
    }

    private static boolean isForPlatform(final JsonNode node, final String platform) {
        if (platform == null || node == null || !node.has("platforms")) return true;
        final Iterator<JsonNode> pfIt = node.get("platforms").getElements();
        while (pfIt.hasNext()) {
            final JsonNode pf = pfIt.next();
            if (!pf.has("name")) continue;
            if (pf.get("name").getValueAsText().toLowerCase().equals(platform)) return true;
        }
        return false;
    }

    static String ti(final String name) {
        return name.replaceAll("^Titanium\\.", "Ti.")
            .replaceAll("^Titanium$", "Ti")
            .replaceAll("(\\.[23]DMatrix)", "_\1");
    }

    @SuppressWarnings("unchecked")
    private static Map<String, Object> resolveApiBranch(final Map<String, Object> tree, final String[] nTree, final int i) {
        final String key = nTree[i];
        final Map<String, Object> branch;
        if (!tree.containsKey(key)) {
            branch = new TreeMap<String, Object>();
            tree.put(key, branch);
        } else {
            branch = (Map<String, Object>) tree.get(key);
        }
        if (i < nTree.length - 1) return resolveApiBranch(branch, nTree, i + 1);
        if (!branch.containsKey(SECTION)) branch.put(SECTION, new ApiClass());
        return branch;
    }

    @SuppressWarnings("unchecked")
    private static void writeTree(final Map<String, Object> tree, final int ws) {
        final Iterator<String> it = tree.keySet().iterator();
        while (it.hasNext()) {
            final String n = it.next();
            if (n.equals(SECTION)) {
                final ApiClass section = (ApiClass) tree.get(n);
                section.print(ws);
            } else {
                whitespaces(ws);
                line(n + " " + (ws > 0 ? ":" : "=") + " {");
                final Map<String, Object> v = (Map<String, Object>) tree.get(n);
                writeTree(v, ws + 1);
                whitespaces(ws);
                out("}");
            }
            line(ws > 0 ? (it.hasNext() ? "," : "") : ";");
            PW.flush();
        }
    }

    

}
