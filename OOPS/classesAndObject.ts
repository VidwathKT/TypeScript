// In TypeScript, classes and objects are fundamental concepts of object-oriented programming. They allow you to create reusable and organized code structures.

// 1. Classes
// A class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have.

// Defining a Class
// Here's a simple example of how to define a class in TypeScript:


class Person {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// 2. Creating Objects
// An object is an instance of a class. You can create multiple objects from the same class, each with its own unique property values.

// Creating an Object
// You can create an object using the new keyword followed by the class name and any necessary constructor arguments.


const per = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Calling methods on the objects
// person1.g(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.g(); // Output: Hello, my name is Bob and I am 25 years old.
// 3. Access Modifiers
// TypeScript supports access modifiers, which define the visibility of class properties and methods. The three main modifiers are:

// public: The default modifier, accessible from anywhere.
// private: Accessible only within the class.
// protected: Accessible within the class and by subclasses.
// Example with Access Modifiers

class Car1 {
    public model: string;   // Public property
    private year: number;   // Private property

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    public getYear(): number {
        return this.year; // Accessing private property through a public method
    }
}

const myCar1 = new Car1("Toyota", 2021);
console.log(myCar1.model);  // Output: Toyota
// console.log(myCar.year); // Error: Property 'year' is private and only accessible within class 'Car'.
console.log(myCar1.getYear()); // Output: 2021