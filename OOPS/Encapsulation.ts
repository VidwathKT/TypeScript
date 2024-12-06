// Step 1: Define a class with private properties and public methods
class BankAccount {
    // Private properties: Cannot be accessed directly from outside the class
    private accountNumber: number;
    private balance: number;

    // Public property: Can be accessed and modified directly
    public accountHolderName: string;

    // Step 2: Constructor to initialize properties
    constructor(accountNumber: number, accountHolderName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance; // Initialize the balance
    }

    // Step 3: Public method to deposit money (exposes behavior safely)
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount; // Update the private balance property
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Step 4: Public method to withdraw money (adds safeguards)
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount; // Update the private balance property
            console.log(`Withdrew ${amount}. Remaining balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Step 5: Public method to check the balance (read-only access)
    public checkBalance(): number {
        return this.balance; // Access the private balance property
    }
}

// Step 6: Create an instance of the class
const myAccount = new BankAccount(123456, "John Doe", 500);

// Step 7: Access public properties and methods
console.log(`Account Holder: ${myAccount.accountHolderName}`); // Output: John Doe
myAccount.deposit(200); // Deposit money
myAccount.withdraw(100); // Withdraw money
console.log(`Current Balance: ${myAccount.checkBalance()}`); // Check the balance

// Step 8: Attempt to access private properties (uncomment to see error)
// console.log(myAccount.balance); // Error: Property 'balance' is private
// console.log(myAccount.accountNumber); // Error: Property 'accountNumber' is private
