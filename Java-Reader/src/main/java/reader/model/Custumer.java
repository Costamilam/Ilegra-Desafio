package reader.model;

import java.util.Map;

public final class Custumer {
    public static final String[] HEADERS = {"cnpj", "name", "businessArea"};

    public static final String ID = "002";

    public String cnpj;

    public String name;

    public String businessArea;

    public Custumer(String cnpj, String name, String businessArea) {
        this.cnpj = cnpj;

        this.name = name;

        this.businessArea = businessArea;
    }

    public static Custumer asDictionary(Map<String, String> dictionary) {
        return new Custumer(
            dictionary.get("cnpj"),
            dictionary.get("name"),
            dictionary.get("businessArea")
        );
    }
}