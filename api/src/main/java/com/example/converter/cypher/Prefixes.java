package com.example.converter.cypher;
import java.util.Arrays;
import java.util.List;

public class Prefixes {
    final static String BASE_URI = "http://northwind.com/model/";

    private final static List<String> PREFIXES = Arrays.asList("edge", "property", "value");

    @SuppressWarnings("unused")
    private final static String PREFIX_DEFINITIONS;

    static {
        final StringBuilder builder = new StringBuilder();
        for (final String prefix : PREFIXES) {
            builder.append("PREFIX ").append(prefix, 0, 1).append(": <").append(getURI(prefix)).
                    append(">").append(System.lineSeparator());
        }
        PREFIX_DEFINITIONS = builder.toString();
    }

    static String getURI(final String prefix) {
        return BASE_URI + prefix + "#";
    }

    static String getURIValue(final String uri) {
        return uri.substring(uri.indexOf("#") + 1);
    }

    static String getPrefix(final String uri) {
        final String tmp = uri.substring(0, uri.indexOf("#"));
        return tmp.substring(tmp.lastIndexOf("/") + 1);
    }
}
