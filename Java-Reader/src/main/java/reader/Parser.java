package reader;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public final class Parser {
    public static Map<String, ArrayList<Object>> file(File file) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        String content = new String(Files.readAllBytes(Paths.get(file.getPath())), Env.FILE_ENCODING);

        if (!content.trim().isEmpty()) {
            Parser.parseToObject(content);
        }

        return Data.data;
    }

    public static Object getObject(Map dictionary) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
        Class cls = Env.CLASSES.get(dictionary.get("id").toString());

        return cls.getMethod("asDictionary", Map.class).invoke(null, dictionary);
    }

    public static void addObject(String key, Object object) {
        ArrayList<Object> list = Data.data.get(key);

        list.add(object);

        Data.data.put(key, list);
    }

    public static void parseToObject(String content) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
        String[] lines = content.split(Env.LINE_SEPARATOR);

        for (String line : lines) {
            String[] columns = line.split(Env.COLUMN_SEPARATOR);
            
            Map dictionary = createDictionary(columns);

            //System.out.format("\nDic: %s", dictionary);

            addObject(dictionary.get("id").toString(), getObject(dictionary));
        }
    }

    public static ArrayList<Object> parseToSubObject(String content) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
        ArrayList<Object> result = new ArrayList<Object>();

        String[] lines = content.split(Env.SUB_LINE_SEPARATOR);

        for (String line : lines) {
            String[] columns = line.split(Env.SUB_COLUMN_SEPARATOR);
            
            Map dictionary = createSubDictionary(columns);

            result.add(getObject(dictionary));
        }

        return result;
    }

    public static Map createDictionary(String[] columns) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
        Map dictionary = new HashMap();

        dictionary.put("id", columns[0]);

        for (int i = 0; i < columns.length - 1; i++) {
            String column = columns[i + 1];

            if (column.startsWith(Env.SUB_ARRAY_START) && column.endsWith(Env.SUB_ARRAY_END)) {
                dictionary.put(Env.HEADERS.get(columns[0])[i], parseToSubObject(column.substring(1, column.length()-1)));
            } else {
                dictionary.put(Env.HEADERS.get(columns[0])[i], column);
            }
        }

        return dictionary;
    }

    public static Map createSubDictionary(String[] columns) {
        Map dictionary  = new HashMap();

        dictionary.put("id", "sub");

        for (int i = 0; i < columns.length; i++) {
            dictionary.put(Env.HEADERS.get("sub")[i], columns[i]);
        }

        return dictionary;
    }
}
