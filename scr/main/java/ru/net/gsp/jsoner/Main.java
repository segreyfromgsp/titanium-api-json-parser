package ru.net.gsp.jsoner;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.File;
import java.lang.Object;
import java.util.*;

/**
 * @author segrey
 */
public class Main {
    private static final String NAME = "name";
    private static final String SECTION = "{}";
    private static final String[] PLATFORMS = new String[]{"iphone", "android"}; 
    
    public static void main(final String[] args) {
        final File file;
        if (args.length < 1) {
            System.err.println("No file path passed");
            System.exit(1);
        }
        file = new File(args[0]);
        if (!file.exists() && file.isDirectory()) {
            System.err.println("Wrong file path");
            System.exit(1);
        }
        
        final String platform;
        if (args.length > 1) {
            platform = args[1].toLowerCase();
            if (!Arrays.asList(PLATFORMS).contains(platform)) {
                System.err.println("Wrong platform. Available values are:");
                for (final String pf : PLATFORMS) System.err.println(pf);
                System.exit(1);
            }
        } else {
            platform = null;
        }
        
        try {
            loadJson(file, platform);
        } catch (final Exception e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static void loadJson(final File file, final String platform) throws Exception {
        final Map<String, Object> tree = new HashMap<String, Object>();

        final long st = System.currentTimeMillis();
        System.out.println("Loading JSON document");
        final JsonNode rootNode = new ObjectMapper().readValue(file, JsonNode.class);
        final Iterator<String> objects = rootNode.getFieldNames();
        System.out.println("Document loaded in " + (System.currentTimeMillis() - st) + " ms.");

        while (objects.hasNext()) {
            final String objName = objects.next();
            final String[] nTree = objName.contains(".") ? objName.split("\\.") : new String[]{objName};

            final JsonNode objNode = rootNode.get(objName);
            if (!isForPlatform(objNode, platform)) continue;
            
            final Map<String, Object> branch = resolveApiBranch(tree, nTree, 0);
            if (!branch.containsKey(SECTION)) throw new Exception("Bad API branch: " + objName);
            
            final ApiSection obj = (ApiSection) branch.get(SECTION);
            
            
            if (objNode.has(Entity.PARAMETER.listName)) {
                final Iterator<JsonNode> props = objNode.get(Entity.PARAMETER.listName).getElements();
                while (props.hasNext()) {
                    final JsonNode p = props.next();
                    if (!isForPlatform(p, platform)) continue;
                    obj.addProperty(resolveProperty(p, objName));
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

        System.out.println("Tree constructed.");
        System.out.println();
        
        writeTree(tree, 0);
    }
    
    private static boolean isForPlatform(final JsonNode node, final String platform) {
        if (platform == null || !node.has("platforms")) return true;
        final Iterator<JsonNode> pfIt = node.get("platforms").getElements();
        while (pfIt.hasNext()) {
            final JsonNode pf = pfIt.next();
            if (!pf.has("name")) continue;
            if (pf.get("name").getValueAsText().toLowerCase().equals(platform)) return true;
        }
        return false;
    }

    private static ApiSection.ApiProperty resolveProperty(final JsonNode node, final String objName) throws Exception {
        final String fName = node.get(NAME).getTextValue();
        final Map.Entry<String, Type> typeEntry = resolveSingleType(node, fName, objName, Entity.PROPERTY);
        return new ApiSection.ApiProperty(fName, typeEntry.getKey(), typeEntry.getValue());
    }

    private static ApiSection.ApiMethod resolveMethod(final JsonNode m, final String objName) throws Exception {
        final String mName = m.get(NAME).getTextValue();
        if (!m.has("returns")) throw new Exception("No return type for method " + objName + "." + mName);
        final Map<String, Type> typeMap = resolveTypes(m.get("returns"));
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
//                        line("var cb = " + tt.value + ";");
        final List<ApiSection.ApiParameter> paramList = new ArrayList<ApiSection.ApiParameter>();
        if (m.has(Entity.PARAMETER.listName)) {
            final Iterator<JsonNode> params = m.get(Entity.PARAMETER.listName).getElements();
            while (params.hasNext()) {
                final JsonNode p = params.next();
                final String pName = p.get(NAME).getTextValue();
                final String omName = objName + "." + mName;
                final Map<String, Type> pTypeMap = resolveTypes(p);
                for (final String t : pTypeMap.keySet()) {
                    if (Type.VOID == pTypeMap.get(t)) throw new Exception("Void type of parameter " + pName + " for " + omName);
                }
                final JsonNode op = p.has("optional") ? p.get("optional") : null;
                paramList.add(new ApiSection.ApiParameter(pName, op != null && p.isBoolean() && p.getBooleanValue()));
            }
        }
        return new ApiSection.ApiMethod(
            mName, typeEntry.getKey(), typeEntry.getValue(), paramList.isEmpty() ? 
            new ApiSection.ApiParameter[0] : paramList.toArray(new ApiSection.ApiParameter[paramList.size()])
        );
    }

    private static Map.Entry<String, Type> resolveSingleType(final JsonNode node, final String fName, 
                                                             final String pName, final Entity ent) throws Exception {
        final Map<String, Type> typeMap = resolveTypes(node);
        if (typeMap.size() > 1) {
            final boolean isParam = Entity.PARAMETER == ent;
            throw new Exception("More than 1 type of " + ent.name() + " for " + 
                pName + (isParam ? "(" : ".") + fName + (isParam ? ")" : ""));
        }
        return typeMap.entrySet().iterator().next();
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
                typeMap.putAll(resolveTypes(it.next()));
            }
        } 
        if (typeMap.isEmpty()) throw new Exception("NO TYPE : " + n.toString());
        return typeMap;
    }

    private static void addType(final String t, Map<String, Type> tMap) {
        final Type tt;
        if (t.contains("<") || !t.contains(".")) {
            final String type = t.contains("<") ? t.substring(0, t.indexOf("<")) : t;
            tt = Type.forName(type);
        } else {
            tt = null;
        }
        tMap.put(t, tt);
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
        branch.put(SECTION, new ApiSection());
        return branch;
    }
    
    private static void writeTree(final Map<String, Object> tree, final int ws) {
        if (tree.size() > 1 || !tree.containsKey(SECTION)) {
            for (final String n : tree.keySet()) {
                whitespaces(ws);
                System.out.println(n + " = {");
                final Object v = tree.get(n);
                writeTree((Map<String, Object>) v, ws + 1);
                whitespaces(ws);
                System.out.println("};");
            }
        } else {
            whitespaces(ws + 1);
            System.out.println("OBJECT : true");
        }
    }

    private static void whitespaces(final int count) {
        if (count < 1) return;
        for (int i = 0; i < count; i++) System.out.print(" ");
    }

//    private static void out(final String s) {
//        System.out.print(s);
//    }

//    private static void line(final String s) {
//        System.out.println(s);
//    }

}
