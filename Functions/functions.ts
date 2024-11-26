// Example 1: Basic Function with Typed Parameters and Return Value
function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

console.log("Rectangle Area:", calculateRectangleArea(5, 10));

// Example 2: Function with Optional Parameter
function greetUser(firstName: string, lastName?: string): string {
    return lastName
        ? `Hello, ${firstName} ${lastName}!`
        : `Hello, ${firstName}!`;
}

console.log(greetUser("Sophia"));
console.log(greetUser("Sophia", "Johnson"));

// Example 3: Function with Default Parameter
function multiply(a: number, b: number = 1): number {
    return a * b;
}

console.log("Multiplication Result (with default):", multiply(7));
console.log("Multiplication Result:", multiply(7, 3));

// Example 4: Function Type Alias
type Formatter = (text: string) => string;

const capitalize: Formatter = (text) => text.toUpperCase();
console.log("Capitalized Text:", capitalize("typescript"));

// Example 5: Function Overloading
function getInfo(info: string): string;
function getInfo(info: number): number;
function getInfo(info: string | number): string | number {
    if (typeof info === "string") {
        return `Information: ${info}`;
    }
    return info * 2; // For numbers, return double the value
}

console.log(getInfo("Learning TypeScript"));
console.log(getInfo(15));

// Example 6: Arrow Function
const calculateCircleArea = (radius: number): number => Math.PI * radius * radius;

console.log("Circle Area:", calculateCircleArea(5));

// Example 7: Anonymous Function Assigned to a Variable
const subtractNumbers = function (x: number, y: number): number {
    return x - y;
};

console.log("Subtraction Result:", subtractNumbers(20, 8));

// Example 8: Function with Rest Parameters
function sumNumbers(...nums: number[]): number {
    return nums.reduce((sum, num) => sum + num, 0);
}

console.log("Sum of Numbers:", sumNumbers(1, 2, 3, 4, 5));

// Example 9: Void Function
function logMessage(message: string): void {
    console.log("Message:", message);
}

logMessage("This is a void function.");
