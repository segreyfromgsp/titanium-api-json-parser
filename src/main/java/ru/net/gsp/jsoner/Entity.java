package ru.net.gsp.jsoner;

/**
 * @author segrey
 */
enum Entity {
    PROPERTY("properties"),
    METHOD("methods"),
    PARAMETER("parameters");
    
    final String listName;

    private Entity(final String listName) {
        this.listName = listName;
    }
}
