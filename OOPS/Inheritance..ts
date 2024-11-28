// Base Class with Access Modifiers and Protected Members
class Vehicle {
    protected speed: number; // Protected: Accessible in this class and subclasses
    private brand: string;  // Private: Accessible only within this class

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    public accelerate(): void {
        this.speed += 10;
        console.log(`${this.brand} accelerates to ${this.speed} km/h.`);
    }

    public brake(): void {
        this.speed -= 10;
        console.log(`${this.brand} slows down to ${this.speed} km/h.`);
    }
}

// Subclass Extending Base Class
class Car extends Vehicle {
    private model: string;

    constructor(brand: string, model: string, speed: number) {
        super(brand, speed); // Call the parent constructor
        this.model = model;
    }

    public displayInfo(): void {
        console.log(`Car Model: ${this.model}, Speed: ${this.speed} km/h`);
    }

    // Method Overriding
    public accelerate(): void {
        this.speed += 20; // Faster acceleration for cars
        console.log(`Car accelerates quickly to ${this.speed} km/h.`);
    }
}

// Abstract Class Example
abstract class Appliance {
    abstract turnOn(): void; // Abstract method: Must be implemented by subclasses

    turnOff(): void {
        console.log("The appliance is now off.");
    }
}

// Subclass Implementing Abstract Class
class WashingMachine extends Appliance {
    public turnOn(): void {
        console.log("The washing machine is now on.");
    }
}

// Interface Example: Extending a Class and Implementing Interfaces
interface ElectricVehicle {
    chargeBattery(): void;
}

interface HybridVehicle extends ElectricVehicle {
    switchToFuel(): void;
}

// Multiple Inheritance Using Interfaces
class HybridCar extends Car implements HybridVehicle {
    constructor(brand: string, model: string, speed: number) {
        super(brand, model, speed);
    }

    public chargeBattery(): void {
        console.log("Charging the car battery.");
    }

    public switchToFuel(): void {
        console.log("Switching to fuel mode.");
    }
}

// Protected Access Demonstration
class SportsCar extends Car {
    public boostSpeed(): void {
        this.speed += 50; // Accessing protected member from parent class
        console.log(`Sports car boosts speed to ${this.speed} km/h.`);
    }
}

// Demonstrating "is-a" Relationships
function describeVehicle(vehicle: Vehicle): void {
    console.log("This is a type of vehicle.");
}

// Instantiating Classes and Demonstrating Features
const vehicle = new Vehicle("Generic Brand", 50);
vehicle.accelerate();
vehicle.brake();

console.log("\n--- Car Inheritance ---");
const car = new Car("Toyota", "Camry", 100);
car.displayInfo();
car.accelerate();
car.brake();

console.log("\n--- Sports Car Inheritance ---");
const sportsCar = new SportsCar("Ferrari", "488 Spider", 200);
sportsCar.boostSpeed();

console.log("\n--- Abstract Class and Washing Machine ---");
const washingMachine = new WashingMachine();
washingMachine.turnOn();
washingMachine.turnOff();

console.log("\n--- Hybrid Car with Multiple Inheritance ---");
const hybridCar = new HybridCar("Tesla", "Model S", 120);
hybridCar.displayInfo();
hybridCar.chargeBattery();
hybridCar.switchToFuel();

console.log("\n--- Using Base Class Polymorphism ---");
describeVehicle(car); // Works since Car extends Vehicle
describeVehicle(hybridCar); // Works since HybridCar extends Car, which extends Vehicle

//Output:-
// Generic Brand accelerates to 60 km/h.
// Generic Brand slows down to 50 km/h.

// --- Car Inheritance ---
// Car Model: Camry, Speed: 100 km/h
// Car accelerates quickly to 120 km/h.
// Generic Brand slows down to 110 km/h.

// --- Sports Car Inheritance ---
// Sports car boosts speed to 250 km/h.

// --- Abstract Class and Washing Machine ---
// The washing machine is now on.
// The appliance is now off.

// --- Hybrid Car with Multiple Inheritance ---
// Car Model: Model S, Speed: 120 km/h
// Charging the car battery.
// Switching to fuel mode.

// --- Using Base Class Polymorphism ---
// This is a type of vehicle.
// This is a type of vehicle.
