package ru.net.gsp.jsoner;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.File;
import java.util.*;

/**
 * @author segrey
 */
public class Main {
    private static final Map<String, String> TYPES = new HashMap<String, String>();

    static {
        TYPES.put("Number", "0");
        TYPES.put("String", "''");
        TYPES.put("Callback", "");
        TYPES.put("void", "");
        TYPES.put("Dictionary", "{}");
        TYPES.put("Boolean", "false");
        TYPES.put("Object", "{}");
        TYPES.put("Array", "[]");
        TYPES.put("contentOffsetOption", "{}");
    }
    
    public static void main(final String[] args) {
        if (args.length < 1) return;
        try {
            loadJson(args[0]);
        } catch (final Exception e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static void loadJson(final String fname) throws Exception {
        final Map<String, Object> tree = new HashMap<String, Object>();
        final List<String> types = new ArrayList<String>();

        final JsonNode rootNode = new ObjectMapper().readValue(new File(fname), JsonNode.class);
        final Iterator<String> fields = rootNode.getFieldNames();

        while (fields.hasNext()) {
            final String name = fields.next();
            resolveNameTree(tree, name.contains(".") ? name.split("\\.") : new String[]{name}, 0);
            final JsonNode objNode = rootNode.get(name);
            if (objNode.has("properties")) {
                final Iterator<JsonNode> props = objNode.get("properties").getElements();
                while (props.hasNext()) {
                    final JsonNode f = props.next();
                    out(name + "." + f.get("name").getTextValue() + " = ");
                    resolveType(types, f, false);
                    // TODO
                    line("");
                }
            }
            if (objNode.has("methods")) {
                final Iterator<JsonNode> meths = objNode.get("methods").getElements();
                while (meths.hasNext()) {
                    final JsonNode m = meths.next();
                    out(name + "." + m.get("name").getTextValue() + " = function(");
                    if (m.has("parameters")) {
                        int pc = 0;
                        final Iterator<JsonNode> params = m.get("parameters").getElements();
                        while (params.hasNext()) {
                            final JsonNode p = params.next();
                            if (pc > 0) out(", ");
                            out(p.get("name").getTextValue());
                            pc++;
                            resolveType(types, p, null);
                        }
                    }
                    out(") = {");
                    if (m.has("returns")) {
                        resolveType(types, m.get("returns"), true);
                        // TODO
                    }
                    line("};");
                }
            }
        }
    }

    private static void resolveType(final List<String> types, final JsonNode n, final Boolean isMethod) {
        if (n.isArray()) {
            final Iterator<JsonNode> it = n.getElements();
            while (it.hasNext()) {
                resolveType(types, it.next(), isMethod);
            }
            return;
        }
        if (n.has("type")) {
            final JsonNode t = n.get("type");
            if (t.isArray()) {
                final Iterator<JsonNode> tps = t.getElements();
                while (tps.hasNext()) {
                    final String type = tps.next().getValueAsText();
                    outType(types, type, isMethod);
                }
            } else {
                outType(types, t.getValueAsText(), isMethod);
            }
        } else {
            System.out.println("NO TYPE : " + n.toString());
        }
    }

    private static void outType(final List<String> types, final String t, final Boolean isMethod) {
        if (t.contains(".") && !t.contains("<")) return;
        final String type = t.contains("<") ? t.substring(0, t.indexOf("<")) : t;
        if ((isMethod == null || !isMethod) && type.equals("void")) System.out.println("NOT A METHOD: " + type);
        if (isMethod != null && type.equals("Callback")) System.out.println("NOT A PARAM: " + isMethod);
        if (!types.contains(type)) {
            System.out.println(type);
            types.add(type);
        }
    }

    @SuppressWarnings("unchecked")
    private static void resolveNameTree(final Map<String, Object> tree, final String[] nTree, final int i) {
        final String key = nTree[i];
        final Map<String, Object> nMap;
        if (!tree.containsKey(key)) {
            nMap = new HashMap<String, Object>();
            tree.put(key, nMap);
            for (int j = 0; j < i + 1; j++) {
                if (j > 0) out(".");
                out(nTree[j]);
            }
            line(" = {};");
        } else {
            nMap = (Map<String, Object>) tree.get(key);
        }
        if (i < nTree.length - 1) resolveNameTree(nMap, nTree, i + 1);
    }

    private static void out(final String s) {
//        System.out.print(s);
    }

    private static void line(final String s) {
//        System.out.println(s);
    }

}
