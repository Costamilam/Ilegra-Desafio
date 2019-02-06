package reader.model;

import java.util.Map;

public final class Item {
    public static final String[] HEADERS = {"itemId", "quantity", "price"};

    public static final String ID = "sub";

    public int itemId;

    public int quantity;

    public int price;

    public Item(int itemId, int quantity, int price) {
        this.itemId = itemId;

        this.quantity = quantity;

        this.price = price;
    }

    public static Item asDictionary(Map<String, String> dictionary) {
        return new Item(
            Integer.parseInt(dictionary.get("itemId").toString()),
            Integer.parseInt(dictionary.get("quantity").toString()),
            (int) Float.parseFloat(dictionary.get("price").toString()) * 100
        );
    }
}