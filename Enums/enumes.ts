// Example 1: Numeric Enum
enum PriorityLevel {
    Low = 1,
    Medium,
    High,
    Critical
}

function getPriorityMessage(level: PriorityLevel): string {
    switch (level) {
        case PriorityLevel.Low:
            return "Low priority: No immediate action required.";
        case PriorityLevel.Medium:
            return "Medium priority: Address this soon.";
        case PriorityLevel.High:
            return "High priority: Take action now.";
        case PriorityLevel.Critical:
            return "Critical priority: Immediate attention needed!";
        default:
            return "Invalid priority level.";
    }
}

console.log(getPriorityMessage(PriorityLevel.Critical)); // Critical priority message
console.log("Numeric Value of High Priority:", PriorityLevel.High); // 3

// Example 2: String Enum
enum AccessLevel {
    Guest = "Guest",
    User = "User",
    Admin = "Admin",
    SuperAdmin = "SuperAdmin"
}

function describeAccess(level: AccessLevel): string {
    return `Access Level: ${level}`;
}

console.log(describeAccess(AccessLevel.Admin)); // Access Level: Admin

// Example 3: Enum with Custom Methods
enum Weekday {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

function isWeekend(day: Weekday): boolean {
    return day === Weekday.Saturday || day === Weekday.Sunday;
}

console.log("Is Sunday a weekend?", isWeekend(Weekday.Sunday)); // true
console.log("Is Wednesday a weekend?", isWeekend(Weekday.Wednesday)); // false

// Example 4: Heterogeneous Enum
enum Status {
    Success = 1,
    Failure = "Error"
}

function logStatus(status: Status): void {
    if (status === Status.Success) {
        console.log("Operation completed successfully.");
    } else if (status === Status.Failure) {
        console.log("Operation failed: An error occurred.");
    }
}

logStatus(Status.Success); // Operation completed successfully
logStatus(Status.Failure); // Operation failed: An error occurred
