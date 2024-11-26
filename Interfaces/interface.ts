// Define an interface for a customer
interface Customer {
    customerId: number;
    fullName: string;
    emailAddress: string;
    isPremiumMember: boolean;
    // Optional property
    loyaltyPoints?: number;
}

// Function to display customer details
function printCustomerDetails(customer: Customer): void {
    console.log("Customer Details:");
    console.log(`Customer ID: ${customer.customerId}`);
    console.log(`Full Name: ${customer.fullName}`);
    console.log(`Email: ${customer.emailAddress}`);
    console.log(`Premium Member: ${customer.isPremiumMember ? "Yes" : "No"}`);
    if (customer.loyaltyPoints) {
        console.log(`Loyalty Points: ${customer.loyaltyPoints}`);
    }
}

// Create a customer object
const customer1: Customer = {
    customerId: 101,
    fullName: "John Doe",
    emailAddress: "john.doe@example.com",
    isPremiumMember: true,
};

// Display the customer details
printCustomerDetails(customer1);

// Interface with optional and readonly properties
interface ProductItem {
    readonly productId: number; // Cannot be modified
    productName: string;
    unitPrice: number;
    category?: string; // Optional property
}

// Create a product item object
const item: ProductItem = {
    productId: 2001,
    productName: "Wireless Headphones",
    unitPrice: 199.99,
};

// item.productId = 3000; // Error: Cannot assign to 'productId' because it is a read-only property

console.log("Product Item:", item);

// Interface for a function type
interface ArithmeticOperation {
    (x: number, y: number): number;
}

// Implementing the interface
const subtract: ArithmeticOperation = (x, y) => x - y;
const divide: ArithmeticOperation = (x, y) => x / y;

console.log("Subtraction:", subtract(50, 20));
console.log("Division:", divide(100, 5));

// Interface extending another interface
interface Vehicle {
    brand: string;
    model: string;
}

interface Car extends Vehicle {
    carId: number;
    type: string;
}

// Create a car object
const car: Car = {
    carId: 4001,
    brand: "Tesla",
    model: "Model S",
    type: "Electric",
};

console.log("Car Details:", car);

// Interface for a class
interface Appliance {
    applianceName: string;
    functionality(): string;
}

class Refrigerator implements Appliance {
    applianceName: string;

    constructor(applianceName: string) {
        this.applianceName = applianceName;
    }

    functionality(): string {
        return "Keeps food and drinks cold.";
    }
}

const fridge = new Refrigerator("Smart Fridge");
console.log(`${fridge.applianceName} functionality: ${fridge.functionality()}`);
