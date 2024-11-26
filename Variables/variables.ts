// In TypeScript, variables are similar to JavaScript variables, but TypeScript adds type annotations to enforce specific data types. This feature helps catch errors at compile-time rather than runtime. Here’s a breakdown of how variables work in TypeScript:

// Declaring Variables in TypeScript
// Basic Declaration with Types

// You can specify types explicitly by using a colon (:) followed by the type.

let age1: number = 25;
let firstName: string = "Alice";
let isActive: boolean = true;
// Type Inference

// TypeScript can infer the type based on the assigned value, so you don’t always need to specify it.

let age2 = 25;             // TypeScript infers "number"
let name1 = "Alice";       // TypeScript infers "string"
let isMember = true;      // TypeScript infers "boolean"
// Constants

// Declared using const, and once assigned, their values cannot be changed. Type inference works with const as well.

const pi: number = 3.14;
const greeting = "Hello"; // TypeScript infers "string"
// Arrays

// Use type[] to declare an array of specific types.

let numbers1: number[] = [1, 2, 3];
let names2: string[] = ["Alice", "Bob"];
// Union Types

// Union types allow a variable to hold values of multiple types.

let userId: string | number;
userId = "ABC123";  // valid
userId = 123;       // valid
// Any Type

// Use any when you’re not sure of a variable’s type or want to bypass type checking.

let unknownValue1: any = "hello";
unknownValue1 = 42;  // valid
unknownValue1 = true; // valid
// Special Types
// Void

// Typically used as a return type for functions that do not return a value.

// function logMessage(message: string): void {
//     console.log(message);
// }
// Null and Undefined

// Explicitly specify null or undefined as types when needed.

let value: number | null = null;
let notAssigned: undefined = undefined;
// Object Type

// Use the object type for non-primitive types, though it’s recommended to define specific shapes using interfaces or type aliases.

let user: object = { name: "Alice", age: 30 };
// Tuples

// Tuples are fixed-length arrays with known types at each position.

let user1: [string, number, boolean];
user = ["Alice", 30, true]; // valid
// Type Assertions
// Type assertions allow you to specify a variable’s type explicitly when you’re certain of it, useful when TypeScript infers incorrectly.


let value1: any = "Hello, TypeScript!";
let strLength: number = (value1 as string).length;
// let, const, and var in TypeScript
// TypeScript enforces let and const instead of var for block-scoped variables. Use const for values that won’t change and let otherwise.
// Example
// Here’s an example of different types of variables in TypeScript:


let employeeId: number = 101;
const employeeName: string = "John";
let isEmployed: boolean = true;
let hobbies: string[] = ["reading", "coding"];
let address: [string, number] = ["Main St", 123]; // Tuple type
let result: string | null = null; // Union type

function greets(name: string): void {
   console.log(`Hello, ${name}!`);
}

greets(employeeName);
// Summary
// TypeScript’s type system for variables provides more control over the types and shapes of data in your code, helping prevent runtime errors and making code easier to understand and maintain.