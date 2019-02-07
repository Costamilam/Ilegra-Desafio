package reader;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Hello world!
 */
public final class App {
    public static List<File> inputFiles = new ArrayList<File>();

    public static Map<String, ArrayList<Object>> data = new HashMap<String, ArrayList<Object>>() {{
        for (String key : Env.HEADERS.keySet()) {
            put(key, new ArrayList<Object>());
        }
    }};

    public static void verifyDirectorys() {
        File inputDirectory = new File(Env.INPUT_DIRECTORY);

        if (!inputDirectory.isDirectory()) {
            inputDirectory.mkdirs();
        }

        File outputDirectory = new File(Env.OUTPUT_DIRECTORY);

        if (!outputDirectory.isDirectory()) {
            outputDirectory.mkdirs();
        }
    }

    public static void loadFiles() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        File directory = new File(Env.INPUT_DIRECTORY);

        for (File file : directory.listFiles()) {
            addFile(file);
        }
    }

    public static void addFile(File file) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        if (file.isFile() && file.canRead() && file.getName().endsWith(Env.EXTENSION_ACCEPT)) {
            App.inputFiles.add(file);

            Parser.file(file);
        } else {
            System.out.println(
                String.format("The file %s is can not read or your extension is different of %s", file.getName(), Env.EXTENSION_ACCEPT)
            );
        }
    }

    public static void createOutput() throws IOException {
        BufferedWriter writer = new BufferedWriter(new FileWriter(String.format("%s/%s", Env.OUTPUT_DIRECTORY, Env.OUTPUT_FILE)));

        writer.write(Output.get());

        writer.close();

        System.out.println(String.format("Output:\n%s", Output.get()));
    }

    public static void callbackCreate(File file) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        App.addFile(file);

        App.createOutput();
    }

    public static void callbackUpdateOrDelete(File file) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        for (ArrayList<Object> objects : App.data.values()) {
            objects.clear();
        }

        App.loadFiles();

        App.createOutput();
    }

    /**
     * Says hello to the world.
     * @param args The arguments of the program.
     */
    public static void main(String[] args) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        App.verifyDirectorys();

        App.loadFiles();

        App.createOutput();

        new WatchDir(Paths.get(Env.INPUT_DIRECTORY)).processEvents(
            App.class.getMethod("callbackCreate", File.class),
            App.class.getMethod("callbackUpdateOrDelete", File.class),
            App.class.getMethod("callbackUpdateOrDelete", File.class)
        );
    }
}
