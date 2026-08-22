import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class SalaryAnalytics {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee(101, "Alice", 120000.0),
            new Employee(102, "Bob", 120000.0),
            new Employee(103, "Charlie", 95000.0),
            new Employee(104, "David", 80000.0),
            new Employee(105, "Emma", 45000.0)
        );

        double highest = employees.stream()
            .mapToDouble(Employee::getSalary)
            .max()
            .orElse(0.0);

        Optional<Double> secondHighest = employees.stream()
            .map(Employee::getSalary)
            .distinct()
            .sorted(Comparator.reverseOrder())
            .skip(1)
            .findFirst();

        double lowest = employees.stream()
            .mapToDouble(Employee::getSalary)
            .min()
            .orElse(0.0);

        System.out.printf("Highest Salary: $%.2f%n", highest);
        if (secondHighest.isPresent()) {
            System.out.printf("2nd Highest Distinct Salary: $%.2f%n", secondHighest.get());
        } else {
            System.out.println("2nd Highest Distinct Salary: N/A");
        }
        System.out.printf("Lowest Salary: $%.2f%n", lowest);
    }
}
