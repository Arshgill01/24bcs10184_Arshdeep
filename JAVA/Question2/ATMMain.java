import java.util.InputMismatchException;
import java.util.Scanner;

public class ATMMain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BankAccount account = new BankAccount(500.00);

        System.out.printf("Current balance: $%.2f%n", account.getBalance());

        try {
            System.out.print("Enter withdrawal amount: ");
            double amount = scanner.nextDouble();
            account.withdraw(amount);
        } catch (InsufficientFundsException e) {
            System.out.println("Transaction failed: " + e.getMessage());
            System.out.printf("Additional funds needed: $%.2f%n", e.getMissingAmount());
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid amount: " + e.getMessage());
        } catch (InputMismatchException e) {
            System.out.println("Invalid input: Please enter a valid number.");
        } finally {
            System.out.println("Session terminated.");
            scanner.close();
        }
    }
}
