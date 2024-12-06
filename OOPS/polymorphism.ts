// Base class demonstrating polymorphism through method overriding
class Shape {
    constructor(public name: string) {}

    // Method to be overridden
    area(): number {
        console.log("Base Shape does not have a specific area.");
        return 0;
    }
}

// Subclass 1: Circle
class Circle extends Shape {
    constructor(public radius: number) {
        super("Circle");
    }

    // Overriding the area method
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Subclass 2: Rectangle
class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super("Rectangle");
    }

    // Overriding the area method
    area(): number {
        return this.width * this.height;
    }
}

// Subclass 3: Triangle
class Triangle extends Shape {
    constructor(public base: number, public height: number) {
        super("Triangle");
    }

    // Overriding the area method
    area(): number {
        return 0.5 * this.base * this.height;
    }
}

// Demonstrating method overloading (Compile-Time Polymorphism)
class Calculator {
    // Overloaded methods with different argument types
    add(a: number, b: number): number;
    add(a: string, b: string): string;

    // Implementation of the overloaded methods
    add(a: any, b: any): any {
        return a + b;
    }
}

// Abstract class demonstrating polymorphism
abstract class Animal {
    abstract sound(): void; // Abstract method

    move(): void {
        console.log("This animal moves.");
    }
}

// Subclass: Dog
class Dog extends Animal {
    sound(): void {
        console.log("Woof! Woof!");
    }
}

// Subclass: Cat
class Cat extends Animal {
    sound(): void {
        console.log("Meow!");
    }
}

// Interface polymorphism: Extending an interface and using type guards
interface Vehicle {
    drive(): void;
}

class Car2 implements Vehicle {
    drive(): void {
        console.log("Driving a car.");
    }
}

class Bike2 implements Vehicle {
    drive(): void {
        console.log("Riding a bike.");
    }
}

// Polymorphic function using a type guard
function operate(vehicle: Vehicle): void {
    if (vehicle instanceof Car2) {
        console.log("This is a car.");
    } else if (vehicle instanceof Bike2) {
        console.log("This is a bike.");
    }
    vehicle.drive();
}

// Polymorphism in action: Base type can reference derived types
function displayArea(shape: Shape): void {
    console.log(`The area of the ${shape.name} is ${shape.area().toFixed(2)}`);
}

// Main execution
console.log("\n--- Method Overriding (Runtime Polymorphism) ---");
const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(10, 20),
    new Triangle(10, 15)
];
shapes.forEach((shape) => displayArea(shape));

console.log("\n--- Method Overloading (Compile-Time Polymorphism) ---");
const calculator = new Calculator();
console.log("Addition of numbers:", calculator.add(10, 20));
console.log("Concatenation of strings:", calculator.add("Hello, ", "World!"));

console.log("\n--- Abstract Classes and Polymorphism ---");
const dog: Animal = new Dog();
const cat: Animal = new Cat();
dog.sound();
cat.sound();

console.log("\n--- Interface Polymorphism ---");
const myCar2: Vehicle = new Car2();
const myBike2: Vehicle = new Bike2();
operate(myCar2);
operate(myBike2);
