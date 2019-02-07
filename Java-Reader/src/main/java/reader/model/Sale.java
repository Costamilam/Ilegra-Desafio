package reader.model;

import java.util.ArrayList;
import java.util.Map;

public final class Sale {
    public static final String[] HEADERS = {"saleId", "items", "salesmanName"};

    public static final String ID = "003";

    public int saleId;

    public ArrayList<Item> items;

    public String salesmanName;

    Sale(int saleId, ArrayList<Item> items, String salesmanName) {
        this.saleId = saleId;

        this.items = items;

        this.salesmanName = salesmanName;
    }

    public static Sale asDictionary(Map<String, ?> dictionary) {
        // ArrayList<Item> items = new ArrayList<Item>();

        // for (Map<String, String> item : (ArrayList<Map<String, String>>) dictionary.get("items")) {
        //     items.add(Item.asDictionary(item));
        // }

        return new Sale(
            Integer.parseInt(dictionary.get("saleId").toString()),
            (ArrayList<Item>) dictionary.get("items"),
            dictionary.get("salesmanName").toString()
        );
    }
}