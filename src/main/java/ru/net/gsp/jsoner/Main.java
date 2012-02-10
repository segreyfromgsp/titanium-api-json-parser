package ru.net.gsp.jsoner;

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
    private static final String NAME = "name";
    private static final String SECTION = "{}";
    private static final List<String> PLATFORMS = Arrays.asList("iphone", "android");
    private static PrintWriter PW = new PrintWriter(System.out);
    private static final Map<String, String> RESERVED = new HashMap<String, String>();

    static {
        Arrays.asList("", "", "", "");
        RESERVED.put("function", "func");
        RESERVED.put("var", "vrb");
        RESERVED.put("null", "nil");
        RESERVED.put("undefined", "undef");
        RESERVED.put("return", "rtn");
        RESERVED.put("const", "cnst");
//        RESERVED.put("", "");
    }

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
            if (outFile != null) PW = new PrintWriter(outFile);
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
        final Map<String, Object> tree = new HashMap<String, Object>();
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

            final ApiSection obj = (ApiSection) branch.get(SECTION);


            if (objNode.has(Entity.PROPERTY.listName)) {
                final Iterator<JsonNode> props = objNode.get(Entity.PROPERTY.listName).getElements();
                while (props.hasNext()) {
                    final JsonNode p = props.next();
                    if (!isForPlatform(p, platform)) continue;
                    obj.addProperty(resolveProperty(p));
                }
            }

            if (objNode.has(Entity.METHOD.listName)) {
                final Iterator<JsonNode> meths = objNode.get(Entity.METHOD.listName).getElements();
                while (meths.hasNext()) {
                    final JsonNode m = meths.next();
                    if (!isForPlatform(m, platform)) continue;
                    obj.addMethod(resolveMethod(m, objName));
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

    private static ApiSection.ApiProperty resolveProperty(final JsonNode node) throws Exception {
        final String fName = resolveName(node);
        final Map.Entry<String, Type> typeEntry = resolveSingleType(node);
        return new ApiSection.ApiProperty(fName, typeEntry.getKey(), typeEntry.getValue());
    }

    private static ApiSection.ApiMethod resolveMethod(final JsonNode m, final String objName) throws Exception {
        final String mName = resolveName(m);
        if (!m.has("returns")) throw new Exception("No return type for method " + objName + "." + mName);
        final Map.Entry<String, Type> typeEntry = resolveSingleType(m.get("returns"));
        final List<ApiSection.ApiParameter> paramList = new ArrayList<ApiSection.ApiParameter>();
        if (m.has(Entity.PARAMETER.listName)) {
            final Iterator<JsonNode> params = m.get(Entity.PARAMETER.listName).getElements();
            while (params.hasNext()) {
                final JsonNode p = params.next();
                final String pName = resolveName(p);
                final JsonNode op = p.has("optional") ? p.get("optional") : null;
                final boolean optional = op != null && p.isBoolean() && p.getBooleanValue();
                paramList.add(new ApiSection.ApiParameter(pName, optional));
            }
        }
        return new ApiSection.ApiMethod(
            mName, typeEntry.getKey(), typeEntry.getValue(), paramList.isEmpty() ?
            new ApiSection.ApiParameter[0] : paramList.toArray(new ApiSection.ApiParameter[paramList.size()])
        );
    }

    private static String resolveName(final JsonNode m) {
        final String name = m.get(NAME).getTextValue();
        return RESERVED.containsKey(name) ? RESERVED.get(name) : name;
    }

    private static String ti(final String name) {
        return name.replaceAll("^Titanium\\.", "Ti.");
    }

    private static Map.Entry<String, Type> resolveSingleType(final JsonNode node) throws Exception {
        final Map<String, Type> typeMap = resolveTypes(node);
        final Map.Entry<String, Type> typeEntry;
        if (typeMap.size() > 1) {
            final StringBuilder tNames = new StringBuilder();
            for (final String s : typeMap.keySet()) {
                tNames.append(", ").append(s);
            }
            typeEntry = new AbstractMap.SimpleEntry<String, Type>(tNames.substring(2), Type.SEVERAL);
        } else {
            typeEntry = typeMap.entrySet().iterator().next();
        }
        return typeEntry;
    }

    private static Map<String, Type> resolveTypes(final JsonNode n) throws Exception {
        final Map<String, Type> typeMap = new HashMap<String, Type>();
        if (n.has("type")) {
            final JsonNode t = n.get("type");
            if (t.isArray()) {
                final Iterator<JsonNode> tps = t.getElements();
                while (tps.hasNext()) {
                    addType(tps.next().getValueAsText(), typeMap);
                }
            } else {
                addType(t.getValueAsText(), typeMap);
            }
        } else if (n.isArray()) {
            final Iterator<JsonNode> it = n.getElements();
            while (it.hasNext()) {
                final Map<String, Type> map = resolveTypes(it.next());
                for (final String k : map.keySet()) {
                    if (!typeMap.containsValue(map.get(k))) typeMap.put(k, map.get(k));
                }
            }
        }
        if (typeMap.isEmpty()) throw new Exception("NO TYPE : " + n.toString());
        return typeMap;
    }

    private static void addType(final String tName, final Map<String, Type> tMap) {
        final Type tt;
        final String t = ti(tName);
        if (t.contains("<") || !t.contains(".")) {
            final String type = t.contains("<") ? t.substring(0, t.indexOf("<")) : t;
            tt = Type.forName(type);
        } else {
            tt = null;
        }
        if (tt == null || !tMap.containsValue(tt)) tMap.put(t, tt);
    }

    @SuppressWarnings("unchecked")
    private static Map<String, Object> resolveApiBranch(final Map<String, Object> tree, final String[] nTree, final int i) {
        final String key = nTree[i];
        final Map<String, Object> branch;
        if (!tree.containsKey(key)) {
            branch = new HashMap<String, Object>();
            tree.put(key, branch);
        } else {
            branch = (Map<String, Object>) tree.get(key);
        }
        if (i < nTree.length - 1) return resolveApiBranch(branch, nTree, i + 1);
        if (!branch.containsKey(SECTION)) branch.put(SECTION, new ApiSection());
        return branch;
    }

    @SuppressWarnings("unchecked")
    private static void writeTree(final Map<String, Object> tree, final int ws) {
        int i = 0;
        for (final String n : tree.keySet()) {
            if (n.equals(SECTION)) {
                final ApiSection section = (ApiSection) tree.get(n);
                section.print(ws + 1);
            } else {
                whitespaces(ws);
                line(n + " " + (ws > 0 ? ":" : "=") + " {");
                final Map<String, Object> v = (Map<String, Object>) tree.get(n);
                writeTree(v, ws + 1);
                whitespaces(ws);
                line("}" + (ws > 0 ? i < tree.size() - 1 ? "," : ";" : ";"));
            }
            PW.flush();
            i++;
        }
    }

    static void whitespaces(final int count) {
        if (count < 1) return;
        for (int i = 0; i < count; i++) out(" ");
    }

    static void out(final String s) {
        PW.print(s);
    }

    static void line(final String s) {
        PW.println(s);
    }

}
