package reader;

import reader.model.Custumer;
import reader.model.Item;
import reader.model.Sale;
import reader.model.Salesman;

public final class Output {
    public static String get() {
        return String.format("%s\n%s\n%s", Output.getAmountOfClients(), Output.getAmountOfSalesman(), Output.getIdOfTheMostExpensiveSaleAndWorstSalesmanEver());
    }

    public static String getAmountOfClients() {
        return String.format("Amount of clients: %s", App.data.get(Custumer.ID).size());
    }

    public static String getAmountOfSalesman() {
        return String.format("Amount of salesman: %s", App.data.get(Salesman.ID).size());
    }

    public static String getIdOfTheMostExpensiveSaleAndWorstSalesmanEver() {
        int id = -1;
        int maxValue = 0;
        String name = "";
        int minValue = -1;

        for (Object object : App.data.get(Sale.ID)) {
            Sale sale = (Sale) object;

            int total = 0;

            for (Item item : sale.items) {
               total += item.price * item.quantity; 
            }

            if (maxValue < total) {
                id = sale.saleId;
                maxValue = total;
            }

            if (minValue > total || minValue == -1) {
                name = sale.salesmanName;
                minValue = total;
            }
        }

        return String.format("ID of the most expensive sale: %s\nWorst salesman ever: %s", id == -1 ? "" : id, name);
    }
}