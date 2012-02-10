package ru.net.gsp.jsoner;

/**
 * @author segrey
 */
enum Type {
    NUMBER("Number", "0"),
    STRING("String", "''"),
    CALLBACK("Callback", "new Callback()"),
    VOID("void", ""),
    DICTIONARY("Dictionary", "{}"),
    BOOLEAN("Boolean", "false"),
    OBJECT("Object", "{}"),
    ARRAY("Array", "[]"),
    OPTION("contentOffsetOption", "{}"),
    SEVERAL("[]", "null");
    
    final String name;
    final String value;

    private Type(final String name, final String value) {
        this.name = name;
        this.value = value;
    }
    
    static Type forName(final String name) {
        for (final Type t : values()) if (t.name.equals(name)) return t;
        return null;
    }
    
}
