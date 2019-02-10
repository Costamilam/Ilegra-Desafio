package reader;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.Paths;

/**
 * Hello world!
 */
public final class App {
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
        if (file.exists() && file.isFile() && file.canRead() && file.getName().endsWith(Env.EXTENSION_ACCEPT)) {
            Parser.file(file);
        }
    }

    public static void createOutput() throws IOException {
        BufferedWriter writer = new BufferedWriter(new FileWriter(String.format("%s/%s", Env.OUTPUT_DIRECTORY, Env.OUTPUT_FILE)));

        Data.loadData();

        writer.write(Data.get());

        writer.close();
    }

    public static void callbackCreate(File file) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        App.addFile(file);

        App.createOutput();
    }

    public static void callbackUpdateOrDelete(File file) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException, IOException {
        Data.clean();

        App.loadFiles();

        App.createOutput();
    }

    /**
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
