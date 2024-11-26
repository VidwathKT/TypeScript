// Declare arrays with specific types
let number: number[] = [10, 20, 30, 40, 50]; // Array of numbers
let fruit: string[] = ["Apple", "Banana", "Cherry"]; // Array of strings

// Declare an array using a generic type
let mixedArray: Array<number | string> = [1, "Two", 3, "Four"]; // Array with numbers and strings

// Add elements to an array
number.push(60); // Adds 60 at the end
fruit.unshift("Mango"); // Adds "Mango" at the beginning

console.log("Numbers Array:", number);
console.log("Fruits Array:", fruit);

// Access array elements
console.log("First number:", number[0]);
console.log("Last fruit:", fruit[fruit.length - 1]);

// Iterate over an array using `for` loop
console.log("Iterating over numbers array:");
for (let i = 0; i < number.length; i++) {
    console.log(`Index ${i}: ${number[i]}`);
}

// Iterate using `for...of`
console.log("Iterating over fruits array:");
for (let f of fruits) {
    console.log(f);
}

// Using `map` to create a new array
const doubledNumbers = number.map(num => num * 2);
console.log("Doubled Numbers Array:", doubledNumbers);

// Using `filter` to get a subset of elements
const largeNumbers = number.filter(num => num > 30);
console.log("Numbers greater than 30:", largeNumbers);

// Using `reduce` to calculate the sum of numbers
const sum = number.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

// Multidimensional Array
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("Matrix:", matrix);
console.log("Element at (1,1):", matrix[1][1]); // Access row 1, column 1

// Optional: Sorting an array
fruit .sort(); // Sort fruits alphabetically
console.log("Sorted Fruits:", fruit);

// Optional: Array of objects
interface Student {
    id: number;
    name: string;
    marks: number[];
}

let students: Student[] = [
    { id: 1, name: "Alice", marks: [85, 90, 78] },
    { id: 2, name: "Bob", marks: [70, 88, 95] },
];

console.log("Students Array:", students);
