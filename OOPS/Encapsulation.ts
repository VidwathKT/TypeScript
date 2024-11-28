class BankAccount {
    // Private fields (encapsulation)
    #accountNumber;
    #balance;

    constructor(accountNumber, initialBalance) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. Remaining balance: $${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Public method to check the balance
    getBalance() {
        return this.#balance;
    }

    // Public method to get account details (read-only access)
    getAccountInfo() {
        return `Account Number: ${this.#accountNumber}, Balance: $${this.#balance}`;
    }
}

// Example usage
const account = new BankAccount("123456789", 1000);

// Interact with the account using public methods
account.deposit(500); // Deposited $500. New balance: $1500
account.withdraw(200); // Withdrew $200. Remaining balance: $1300
console.log(account.getBalance()); // 1300
console.log(account.getAccountInfo()); // Account Number: 123456789, Balance: $1300

// Attempt to directly access private fields (will result in an error)
//console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
