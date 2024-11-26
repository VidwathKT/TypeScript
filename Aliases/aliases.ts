// Define a type alias for a union type
type ID = number | string;

// Use the alias in a function
function displayId(id: ID): void {
    console.log("ID:", id);
}

// Test the function
displayId(101);        // Using a number as ID
displayId("A12345");   // Using a string as ID

// Define a type alias for an object type
type User = {
    id: ID;
    name: string;
    age: number;
    email?: string; // Optional property
};

// Function to create a user
function createUser(user: User): void {
    console.log("User Created:", user);
}

// Test the function with a user object
createUser({ id: 1, name: "Alice", age: 30 });
createUser({ id: "U001", name: "Bob", age: 25, email: "bob@example.com" });

// Define a type alias for an array of objects
type Product1 = {
    id: number;
    name: string;
    price: number;
};
type ProductList = Product1[];

// Function to calculate total price of products
function calculateTotal(products: ProductList): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Test the function
const products: ProductList = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 400 },
];
console.log("Total Price:", calculateTotal(products));

// Type alias with intersection types
type Employee = {
    id: number;
    name: string;
};
type Manager = Employee & {
    department: string;
};

// Create a manager
const manager: Manager = {
    id: 101,
    name: "Charlie",
    department: "HR",
};
console.log("Manager Details:", manager);
