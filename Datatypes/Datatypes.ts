// TypeScript Data Types Examples

// 1. Basic Types
let isDone: boolean = true;                // Boolean
let age: number = 25;                      // Number
let names: string = "John Doe";             // String
let sentence: string = `My age is ${age}`; // Template String

console.log(isDone, age, names, sentence);

// 2. Arrays
let numbers: number[] = [1, 2, 3, 4];         // Array of numbers
let fruits: Array<string> = ["Apple", "Banana", "Cherry"]; // Generic array
console.log(numbers, fruits);

// 3. Tuple
let person: [string, number] = ["Alice", 30]; // Tuple: fixed number of elements of different types
console.log(person);

// 4. Enum
enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
}
let color: Color = Color.Green; // Access by enum name
console.log(color);             // Output: 1

// 5. Any
let unknownValue: any = 42;
unknownValue = "A string"; // `any` can hold any type
console.log(unknownValue);

// 6. Void
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This function returns nothing (void)");

// 7. Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log(nullValue, undefinedValue);

// 8. Never
function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
}
// Uncommenting the below line will throw an error
// throwError("An unexpected error occurred");

// 9. Object
let personObj: { name: string; age: number } = {
    name: "Jane",
    age: 35
};
console.log(personObj);

// 10. Union Types
let mixed: string | number = "Hello";
mixed = 123; // Can be either a string or a number
console.log(mixed);

