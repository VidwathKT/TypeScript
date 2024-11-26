// Declare a tuple
let users: [string, number, boolean] = ["Alice", 25, true];

// Access elements of the tuple
console.log("Name:", users[0]);  // Alice
console.log("Age:", users[1]);   // 25
console.log("Is Active:", users[2]); // true

// Update tuple values
users[1] = 30; // Update age
console.log("Updated Age:", users[1]); // 30

// Tuple with optional elements
let userWithOptional: [string, number?, boolean?] = ["Bob"];
console.log("User with Optional Tuple:", userWithOptional);

// Tuple with rest elements
let coordinates: [number, number, ...number[]] = [1, 2, 3, 4, 5];
console.log("Coordinates Tuple:", coordinates);

// Use tuples in functions
function getUserDetails(): [string, number, boolean] {
    return ["Charlie", 28, false];
}
const userDetails = getUserDetails();
console.log("User Details Tuple:", userDetails);

// Destructuring a tuple
let [userName, userAge, isActives] = userDetails;
console.log("Destructured Tuple:");
console.log("Name:", userName);  // Charlie
console.log("Age:", userAge);   // 28
console.log("Is Active:", isActives); // false

// Tuple with mixed types and labels
type BookDetails = [title: string, author: string, pages: number];
let book: BookDetails = ["The Great Gatsby", "F. Scott Fitzgerald", 218];
console.log("Book Details:");
console.log("Title:", book[0]);
console.log("Author:", book[1]);
console.log("Pages:", book[2]);
