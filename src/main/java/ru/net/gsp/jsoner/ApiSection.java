package ru.net.gsp.jsoner;

import org.codehaus.jackson.JsonNode;

import java.util.*;

/**
 * @author segrey
 */
abstract class ApiSection {
    private static final String NAME = "name";
    private static final Map<String, String> RESERVED = new HashMap<String, String>();

    static {
        Arrays.asList("", "", "", "");
        RESERVED.put("function", "func");
        RESERVED.put("var", "vrb");
        RESERVED.put("null", "nil");
        RESERVED.put("undefined", "undef");
        RESERVED.put("return", "rtn");
        RESERVED.put("const", "cnst");
        RESERVED.put("default", "defval");
//        RESERVED.put("", "");
    }

    abstract void print(final int ws);

    protected static String resolveName(final JsonNode m) {
        final String name = m.get(NAME).getTextValue();
        return RESERVED.containsKey(name) ? RESERVED.get(name) : name;
    }

    protected static Map.Entry<String, Type> resolveSingleType(final JsonNode node)  {
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

    private static Map<String, Type> resolveTypes(final JsonNode n) {
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
        if (typeMap.isEmpty()) throw new RuntimeException("NO TYPE : " + n.toString());
        return typeMap;
    }

    private static void addType(final String tName, final Map<String, Type> tMap) {
        final Type tt;
        final String t = Main.ti(tName);
        if (t.contains("<") || !t.contains(".")) {
            final String type = t.contains("<") ? t.substring(0, t.indexOf("<")) : t;
            tt = Type.forName(type);
        } else {
            tt = null;
        }
        if (tt == null || !tMap.containsValue(tt)) tMap.put(t, tt);
    }

}
