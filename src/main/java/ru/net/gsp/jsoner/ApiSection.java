package ru.net.gsp.jsoner;

import java.util.*;

import static ru.net.gsp.jsoner.Main.line;
import static ru.net.gsp.jsoner.Main.out;
import static ru.net.gsp.jsoner.Main.whitespaces;

/**
 * @author segrey
 */
class ApiSection {
    final List<ApiProperty> properties = new ArrayList<ApiProperty>();
    final List<ApiMethod> methods = new ArrayList<ApiMethod>();

    void print(final int ws) {
        final Iterator<ApiProperty> pIt = properties.iterator();
        while (pIt.hasNext()) {
            pIt.next().print(ws);
            line(pIt.hasNext() || !methods.isEmpty() ? "," : "");
        }

        final Iterator<ApiMethod> mIt = methods.iterator();
        while (mIt.hasNext()) {
            mIt.next().print(ws);
            line(mIt.hasNext() ? "," : "");
        }
    }

    static class ApiProperty {
        final String name;
        final String strType;
        final Type type;

        ApiProperty(final String name, final String strType, final Type type) {
            this.name = name;
            this.strType = strType;
            this.type = type;
        }

        void print(final int ws) {
            whitespaces(ws);
            out(name + " : ");
            out(formatType());
        }

        protected String formatType() {
            if (type == null) return "new " + strType + "()";
            if (Type.SEVERAL == type) {
                return type.value + " /* " + strType + " */ ";
            }
            return type.value;
        }
    }

    static class ApiMethod extends ApiProperty {
        final ApiParameter[] params;

        ApiMethod(final String name, final String strType, final Type type, final ApiParameter[] params) {
            super(name, strType, type);
            this.params = params;
        }

        void print(final int ws) {
            whitespaces(ws);
            out(name + " : function(");
            if (params.length > 0) {
                for (int i = 0; i < params.length; i++) {
                    out(params[i].name);
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
    
    static class ApiParameter {
        final String name;
        final boolean optional;

        ApiParameter(final String name, final boolean optional) {
            this.name = name;
            this.optional = optional;
        }
    }

    void addProperty(final ApiProperty p) {
        properties.add(p);
    }

    void addMethod(final ApiMethod method) {
        methods.add(method);
    }

}


