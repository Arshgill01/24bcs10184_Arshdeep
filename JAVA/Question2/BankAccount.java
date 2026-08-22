public class BankAccount {
    private double balance;

    public BankAccount() {
        this.balance = 500.00;
    }

    public BankAccount(double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative.");
        }
        this.balance = initialBalance;
    }

    public double getBalance() {
        return balance;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be greater than zero.");
        }
        if (amount > balance) {
            throw new InsufficientFundsException(
                String.format("Withdrawal amount $%.2f exceeds balance $%.2f.", amount, balance),
                amount - balance
            );
        }

        balance -= amount;
        System.out.printf("Withdrawal successful: $%.2f | New balance: $%.2f%n", amount, balance);
    }
}
