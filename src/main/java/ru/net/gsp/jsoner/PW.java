package ru.net.gsp.jsoner;

import java.io.PrintWriter;

/**
 * @author segrey
 */
public class PW {
    private static PrintWriter w = new PrintWriter(System.out);

    public static void set(final PrintWriter writer) {
        w = writer;
    }

    static void whitespaces(final int count) {
        if (count < 1) return;
        for (int i = 0; i < count; i++) out(" ");
    }

    static void out(final String s) {
        w.print(s);
    }

    static void line(final String s) {
        w.println(s);
    }
    
    static void close() {
        w.close();
    }
    
    static void flush() {
        w.flush();
    }
}
