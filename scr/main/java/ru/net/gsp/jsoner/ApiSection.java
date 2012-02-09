package ru.net.gsp.jsoner;

import java.util.*;

/**
 * @author segrey
 */
class ApiSection {
    final List<ApiProperty> properties = new ArrayList<ApiProperty>();
    final List<ApiMethod> methods = new ArrayList<ApiMethod>();

    static class ApiProperty {
        final String name;
        final String strType;
        final Type type;

        ApiProperty(final String name, final String strType, final Type type) {
            this.name = name;
            this.strType = strType;
            this.type = type;
        }
    }

    static class ApiMethod extends ApiProperty {
        final ApiParameter[] params;

        ApiMethod(final String name, final String strType, final Type type, final ApiParameter[] params) {
            super(name, strType, type);
            this.params = params;
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


