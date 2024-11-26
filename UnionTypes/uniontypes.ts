// Example 1: Union Type for variable
let data: string | number;
data = "Hello, TypeScript!";
console.log("String Value:", data);
data = 42;
console.log("Number Value:", data);

// Example 2: Union Type in a function parameter
function printValue(value: string | number | boolean): void {
    if (typeof value === "string") {
        console.log("String Value:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Number Value:", value * 2);
    } else {
        console.log("Boolean Value:", value ? "True" : "False");
    }
}

printValue("Union");
printValue(21);
printValue(true);

// Example 3: Union Type in an object property
type Product = {
    productId: number;
    productName: string;
    stock: number | "Out of Stock";
};

const product1: Product = {
    productId: 1001,
    productName: "Laptop",
    stock: 15,
};

const product2: Product = {
    productId: 1002,
    productName: "Tablet",
    stock: "Out of Stock",
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);

// Example 4: Union Type with arrays
type MixedArray = (string | number)[];
const items: MixedArray = ["Text", 123, "Another Text", 456];
console.log("Mixed Array:", items);

// Example 5: Union Type in function return type
function getItem(id: number): string | null {
    if (id === 1) {
        return "Found Item!";
    } else {
        return null;
    }
}

const item1 = getItem(1);
const item2 = getItem(2);
console.log("Item 1:", item1);
console.log("Item 2:", item2);

// Example 6: Union Type with custom types
type PaymentMethod = "Credit Card" | "PayPal" | "Cash";
function processPayment(method: PaymentMethod): void {
    switch (method) {
        case "Credit Card":
            console.log("Payment processed using Credit Card.");
            break;
        case "PayPal":
            console.log("Payment processed using PayPal.");
            break;
        case "Cash":
            console.log("Payment processed using Cash.");
            break;
        default:
            console.log("Invalid payment method.");
    }
}

processPayment("Credit Card");
processPayment("Cash");
