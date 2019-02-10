package reader;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import reader.model.Custumer;
import reader.model.Item;
import reader.model.Sale;
import reader.model.Salesman;

public final class Data {
    public static Map<String, ArrayList<Object>> data = new HashMap<String, ArrayList<Object>>() {{
        for (String key : Env.HEADERS.keySet()) {
            put(key, new ArrayList<Object>());
        }
    }};

    public static int amountOfClients = 0;

    public static int amountOfSalesman = 0;

    public static Sale mostExpensiveSale;

    public static Map<String, Integer> salesman = new HashMap<String, Integer>();

    public static void loadData() {
        Data.amountOfClients += Data.data.get(Custumer.ID).size();

        Data.amountOfSalesman += Data.data.get(Salesman.ID).size();

        int total;

        Sale sale;

        int mostExpensiveSale = 0;

        for (Object object : Data.data.get(Sale.ID)) {
            sale = (Sale) object;

            total = 0;

            for (Item item : sale.items) {
               total += item.price * item.quantity; 
            }

            if (mostExpensiveSale < total) {
                Data.mostExpensiveSale = sale;

                mostExpensiveSale = total;
            }

            if (Data.salesman.get(sale.salesmanName) == null) {
                Data.salesman.put(sale.salesmanName, total);
            } else {
                Data.salesman.replace(sale.salesmanName, Data.salesman.get(sale.salesmanName) + total);
            }
        }

        Data.cleanData();
    }

    public static String get() {
        return String.format(
            "Amount of clients: %s\nAmount of salesman: %s\nID of the most expensive sale: %s\nWorst salesman ever: %s",
            Data.amountOfClients,
            Data.amountOfSalesman,
            Data.mostExpensiveSale.saleId,
            Data.getWorstSalesmanEver()
        );
    }

    public static String getWorstSalesmanEver() {
        System.out.println(Data.salesman);
        String name = "";

        int worstValue = -1;

        int value;

        for (String key : Data.salesman.keySet()) {
            value = Integer.parseInt(Data.salesman.get(key).toString());

            if (worstValue > value || worstValue == -1) {
                name = key;

                worstValue = value;
            }
        }

        return name;
    }

    public static void clean() {
        Data.cleanData();

        Data.amountOfClients = 0;
    
        Data.amountOfSalesman = 0;
    
        Data.mostExpensiveSale = null;
    
        Data.salesman.clear();
    }

    public static void cleanData() {
        for (ArrayList<Object> objects : Data.data.values()) {
            objects.clear();
        }
    }
}
