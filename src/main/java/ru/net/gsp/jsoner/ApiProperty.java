package ru.net.gsp.jsoner;

import org.codehaus.jackson.JsonNode;

import java.util.Map;

import static ru.net.gsp.jsoner.PW.*;

/**
 * @author segrey
 */
public class ApiProperty extends ApiSectionElement {
    ApiProperty(final JsonNode node) {
        this.name = resolveName(node);
        final Map.Entry<String, Type> typeEntry = resolveSingleType(node);
        this.strType = typeEntry.getKey();
        this.type = typeEntry.getValue();
    }

    void print(final int ws) {
        whitespaces(ws);
        out(name + " : ");
        out(formatType());
    }

}
