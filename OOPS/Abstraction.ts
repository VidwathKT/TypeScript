// Step 1: Define an abstract class
abstract class Shape {
    // Abstract method: Must be implemented by derived classes
    abstract calculateArea(): number;

    // Non-abstract method: Shared implementation for all derived classes
    display(): void {
        console.log(`The area of the shape is: ${this.calculateArea()}`);
    }
}

// Step 2: Create a derived class for Circle
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super(); // Call the constructor of the abstract class
        this.radius = radius; // Initialize radius
    }

    // Implement the abstract method for Circle
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Step 3: Create a derived class for Rectangle
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super(); // Call the constructor of the abstract class
        this.width = width; // Initialize width
        this.height = height; // Initialize height
    }

    // Implement the abstract method for Rectangle
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Step 4: Use the derived classes
const circle = new Circle(5); // Create a Circle object
circle.display(); // Output: The area of the shape is: 78.53981633974483

const rectangle = new Rectangle(10, 20); // Create a Rectangle object
rectangle.display(); // Output: The area of the shape is: 200

// Step 5: Attempt to instantiate the abstract class (uncomment to see error)
// const shape = new Shape(); // Error: Cannot create an instance of an abstract class
