package ru.net.gsp.jsoner;

import org.codehaus.jackson.JsonNode;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import static ru.net.gsp.jsoner.PW.*;

/**
 * @author segrey
 */
class ApiMethod extends ApiSectionElement {
    private String[] params;

    ApiMethod(final JsonNode m, final String parent) {
        this.name = resolveName(m);
        
        if (!m.has("returns")) throw new RuntimeException("No return type for method " + parent + "." + name);
        final Map.Entry<String, Type> typeEntry = resolveSingleType(m.get("returns"));
        this.strType = typeEntry.getKey();
        this.type = typeEntry.getValue();
        
        final List<String> pList = new ArrayList<String>();
        if (m.has(Entity.PARAMETER.listName)) {
            final Iterator<JsonNode> params = m.get(Entity.PARAMETER.listName).getElements();
            while (params.hasNext()) {
                pList.add(resolveName(params.next()));
            }
        }
        
        this.params = pList.isEmpty() ? new String[0] : pList.toArray(new String[pList.size()]); 
    }

    void print(final int ws) {
        whitespaces(ws);
        out(name + " : function(");
        if (params.length > 0) {
            for (int i = 0; i < params.length; i++) {
                out(params[i]);
                if (i < params.length - 1) out(", ");
            }
        }
        out(") {");

        final String t = formatType();
        if (!t.isEmpty()) {
            line("");
            whitespaces(ws + 1);
            line("return " + t + ";");
            whitespaces(ws);
        }
        out("}");
    }
    
}
