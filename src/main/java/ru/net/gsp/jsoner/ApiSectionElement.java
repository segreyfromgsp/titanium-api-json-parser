package ru.net.gsp.jsoner;

/**
 * @author segrey
 */
abstract class ApiSectionElement extends ApiSection {
    protected String name;
    protected String strType;
    protected Type type;

    protected String formatType() {
        if (type == null) return "new " + strType + "()";
        if (Type.SEVERAL == type) {
            return type.value + " /* " + strType + " */ ";
        }
        return type.value;
    }
}
