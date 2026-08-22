function q1_convertToUppercase(names) {
  return names.map((name) => name.toUpperCase());
}

function q2_getAdultNames(users) {
  return users.filter((user) => user.age > 18).map((user) => user.name);
}

function q3_calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}

function q4_getFullNames(people) {
  return people.map((p) => `${p.first} ${p.last}`);
}

function q5_getExpensiveInStockProducts(products) {
  return products
    .filter((p) => p.price > 1000 && p.inStock)
    .map((p) => p.name);
}

function q6_getTopStudentsAndAverage(students) {
  const top = students.filter((s) => s.score > 80);
  const names = top.map((s) => s.name);
  const total = top.reduce((sum, s) => sum + s.score, 0);
  const average = top.length > 0 ? Number((total / top.length).toFixed(2)) : 0;
  return { names, average };
}

function q7_calculateDiscountedCost(items) {
  return items
    .filter((item) => item.price > 1500)
    .reduce((total, item) => total + item.price * 0.8, 0);
}

function q8_getProductSummaryAndTotalValue(products) {
  const fullNames = products.map((p) => `${p.brand} ${p.model}`);
  const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  return { fullNames, totalValue };
}

function q9_getEngineeringHighEarners(employees) {
  const matching = employees.filter(
    (emp) => emp.department === "Engineering" && emp.salary > 1200000
  );
  const names = matching.map((emp) => emp.name);
  const totalSalary = matching.reduce((sum, emp) => sum + emp.salary, 0);
  return { names, totalSalary };
}

function q10_getCompletedHighPriorityTasks(tasks) {
  return tasks
    .filter((task) => task.priority === "high" && task.completed)
    .map((task) => task.title)
    .join(", ");
}

function q11_calculateInStockDiscountedTotal(cart) {
  return cart
    .filter((item) => item.inStock)
    .reduce((sum, item) => sum + item.price * 0.85, 0);
}

function q12_getActiveAdultUsers(users) {
  const matching = users.filter((user) => user.active && user.age > 21);
  const names = matching.map((user) => user.name.toUpperCase());
  const count = matching.length;
  return { names, count };
}

function q13_getWinningPlayersAndScore(players) {
  const winners = players.filter((p) => p.score > 150);
  const winnersFormatted = winners.map((p) => `${p.name} (${p.score})`);
  const totalWinningScore = winners.reduce((sum, p) => sum + p.score, 0);
  return { winnersFormatted, totalWinningScore };
}

function runTests() {
  console.log("Q1:", q1_convertToUppercase(["alice", "bob", "charlie"]));

  const users2 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Alex", age: 32 },
    { name: "Mia", age: 15 },
  ];
  console.log("Q2:", q2_getAdultNames(users2));

  const cart3 = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 80 },
  ];
  console.log("Q3:", q3_calculateCartTotal(cart3));

  const people4 = [
    { first: "John", last: "Doe" },
    { first: "Anna", last: "Smith" },
  ];
  console.log("Q4:", q4_getFullNames(people4));

  const products5 = [
    { name: "iPhone 14", price: 1200, inStock: true },
    { name: "MacBook", price: 1800, inStock: false },
    { name: "AirPods", price: 250, inStock: true },
    { name: "iPad Pro", price: 1100, inStock: true },
  ];
  console.log("Q5:", q5_getExpensiveInStockProducts(products5));

  const students6 = [
    { name: "Riya", score: 92 },
    { name: "Aman", score: 78 },
    { name: "Sneha", score: 88 },
    { name: "Karan", score: 65 },
    { name: "Priya", score: 95 },
  ];
  console.log("Q6:", q6_getTopStudentsAndAverage(students6));

  const items7 = [
    { name: "Smartphone", price: 32000 },
    { name: "Charger", price: 1200 },
    { name: "Headphones", price: 4500 },
    { name: "Power Bank", price: 1800 },
  ];
  console.log("Q7:", q7_calculateDiscountedCost(items7));

  const products8 = [
    { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
    { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
    { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 },
  ];
  console.log("Q8:", q8_getProductSummaryAndTotalValue(products8));

  const employees9 = [
    { name: "Vikram", department: "Engineering", salary: 1800000 },
    { name: "Neha", department: "Marketing", salary: 950000 },
    { name: "Arjun", department: "Engineering", salary: 1350000 },
    { name: "Pooja", department: "Engineering", salary: 980000 },
  ];
  console.log("Q9:", q9_getEngineeringHighEarners(employees9));

  const tasks10 = [
    { title: "Database Migration", priority: "high", completed: true },
    { title: "UI Redesign", priority: "medium", completed: true },
    { title: "API Testing", priority: "high", completed: false },
    { title: "Security Audit", priority: "high", completed: true },
  ];
  console.log("Q10:", q10_getCompletedHighPriorityTasks(tasks10));

  const cart11 = [
    { name: "Monitor", price: 14500, inStock: true },
    { name: "Keyboard", price: 3200, inStock: false },
    { name: "Mouse", price: 1800, inStock: true },
    { name: "Webcam", price: 4200, inStock: true },
  ];
  console.log("Q11:", q11_calculateInStockDiscountedTotal(cart11));

  const users12 = [
    { name: "rahul", age: 19, active: true },
    { name: "simran", age: 24, active: true },
    { name: "aditya", age: 32, active: false },
    { name: "kavya", age: 22, active: true },
  ];
  console.log("Q12:", q12_getActiveAdultUsers(users12));

  const players13 = [
    { name: "Rohit", score: 168 },
    { name: "Virat", score: 142 },
    { name: "Shubman", score: 185 },
    { name: "Ishan", score: 134 },
  ];
  console.log("Q13:", q13_getWinningPlayersAndScore(players13));
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    q1_convertToUppercase,
    q2_getAdultNames,
    q3_calculateCartTotal,
    q4_getFullNames,
    q5_getExpensiveInStockProducts,
    q6_getTopStudentsAndAverage,
    q7_calculateDiscountedCost,
    q8_getProductSummaryAndTotalValue,
    q9_getEngineeringHighEarners,
    q10_getCompletedHighPriorityTasks,
    q11_calculateInStockDiscountedTotal,
    q12_getActiveAdultUsers,
    q13_getWinningPlayersAndScore,
    runTests,
  };
}

if (require.main === module) {
  runTests();
}
