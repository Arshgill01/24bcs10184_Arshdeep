import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class InventoryReorderingSystem {

    public static ArrayList<ArrayList<Integer>> createDefaultInventory() {
        ArrayList<ArrayList<Integer>> inventory = new ArrayList<>();
        inventory.add(new ArrayList<>(List.of(5, 12, 3)));
        inventory.add(new ArrayList<>(List.of(8, 2, 15)));
        inventory.add(new ArrayList<>(List.of(1, 20, 4)));
        return inventory;
    }

    public static ArrayList<ArrayList<Integer>> createTestCase1Inventory() {
        ArrayList<ArrayList<Integer>> inventory = new ArrayList<>();
        inventory.add(new ArrayList<>(List.of(10, 3, 7)));
        inventory.add(new ArrayList<>(List.of(1, 15, 2)));
        inventory.add(new ArrayList<>(List.of(4, 5, 0)));
        return inventory;
    }

    public static LinkedList<Integer> processLowStockItems(ArrayList<ArrayList<Integer>> inventory) {
        LinkedList<Integer> reorderList = new LinkedList<>();
        for (ArrayList<Integer> section : inventory) {
            for (int stock : section) {
                if (stock < 5) {
                    reorderList.add(stock * 2);
                }
            }
        }
        return reorderList;
    }

    public static void printInventory(ArrayList<ArrayList<Integer>> inventory) {
        for (int i = 0; i < inventory.size(); i++) {
            System.out.println("Section " + i + ": " + inventory.get(i));
        }
    }

    public static void main(String[] args) {
        System.out.println("--- Default Warehouse ---");
        ArrayList<ArrayList<Integer>> defaultInventory = createDefaultInventory();
        printInventory(defaultInventory);
        System.out.println("Target Reorders: " + processLowStockItems(defaultInventory));

        System.out.println("\n--- Test Case 1 ---");
        ArrayList<ArrayList<Integer>> testCaseInventory = createTestCase1Inventory();
        printInventory(testCaseInventory);
        System.out.println("Target Reorders: " + processLowStockItems(testCaseInventory));
    }
}
