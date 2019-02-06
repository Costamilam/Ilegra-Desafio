package reader;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import reader.model.Custumer;
import reader.model.Item;
import reader.model.Sale;
import reader.model.Salesman;

public final class Env {
    public static final String INPUT_DIRECTORY = "data/in";

    public static final String OUTPUT_DIRECTORY = "data/out";

    public static final String OUTPUT_FILE = "report.done.dat";

    public static final String EXTENSION_ACCEPT = ".dat";

    public static final Charset FILE_ENCODING = StandardCharsets.UTF_8;

    public static final String LINE_SEPARATOR = "\n";

    public static final String SUB_LINE_SEPARATOR = ",";

    public static final String COLUMN_SEPARATOR = "ç";

    public static final String SUB_COLUMN_SEPARATOR = "-";

    public static final String SUB_ARRAY_START = "[";

    public static final String SUB_ARRAY_END = "]";

    public static final Map<String, String[]> HEADERS = new HashMap<String, String[]>() {{
        put(Salesman.ID, Salesman.HEADERS);

        put(Custumer.ID, Custumer.HEADERS);

        put(Sale.ID, Sale.HEADERS);

        put(Item.ID, Item.HEADERS);
    }};

    public static final Map<String, Class<?>> CLASSES = new HashMap<String, Class<?>>() {{
        put(Salesman.ID, Salesman.class);

        put(Custumer.ID, Custumer.class);

        put(Sale.ID, Sale.class);

        put(Item.ID, Item.class);
    }};
}