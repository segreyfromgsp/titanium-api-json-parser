package ru.net.gsp.jsoner;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @author segrey
 */
public class ApiClass extends ApiSection {
    final List<ApiProperty> properties = new ArrayList<ApiProperty>();
    final List<ApiMethod> methods = new ArrayList<ApiMethod>();

    void addProperty(final ApiProperty p) {
        properties.add(p);
    }

    void addMethod(final ApiMethod method) {
        methods.add(method);
    }

    void print(final int ws) {
        final Iterator<ApiProperty> pIt = properties.iterator();
        while (pIt.hasNext()) {
            pIt.next().print(ws);
            PW.line(pIt.hasNext() || !methods.isEmpty() ? "," : "");
        }

        final Iterator<ApiMethod> mIt = methods.iterator();
        while (mIt.hasNext()) {
            mIt.next().print(ws);
            PW.line(mIt.hasNext() ? "," : "");
        }
    }
    
}
