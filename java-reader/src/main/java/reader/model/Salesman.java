package reader.model;

import java.util.Map;

public final class Salesman {
    public static final String[] HEADERS = {"cpf", "name", "salary"};

    public static final String ID = "001";

    public String cpf;

    public String name;

    public int salary;

    Salesman(String cpf, String name, int salary) {
        this.cpf = cpf;

        this.name = name;

        this.salary = salary;
    }

    public static Salesman asDictionary(Map dictionary) {
        return new Salesman(
            dictionary.get("cpf").toString(),
            dictionary.get("name").toString(),
            (int) Float.parseFloat(dictionary.get("salary").toString()) * 100
        );
    }
}