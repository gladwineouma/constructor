//pseudocode
// constructor bank account(name, balance)
//deposit = balance +amount(new balance)
//withdraw condition for insuffient funds/withdrawable

function BankAccount(userName, balance) {
    this.userName = userName;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        console.log(`${this.userName} deposited ${amount} New balance: ${this.balance}`);
        return this.balance;
    };

    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.userName} withdrew ${amount} New balance: ${this.balance}`);
            return this.balance;
        } else {
            console.log(`${this.userName} tried to withdraw ${amount} but has insufficient funds.`);
            return "Insufficient balance";
        }
    };
}

const account1 = new BankAccount("Linn", 500)
const account2 = new BankAccount("Sharon", 300);
const account3 = new BankAccount("Abel", 1000);


account1.deposit(200);    
account1.withdraw(100);    

account2.withdraw(350);    
account2.deposit(100);     
account2.withdraw(200);   

account3.withdraw(500);    
account3.deposit(250);


// Create a Student object with name, scores (an array), and a method getAverage() 
// that returns the average score. Add another method hasPassed() that returns true if 
// the average is 50 or more, otherwise false. Create and test this for at least two students.
//pseudocode
//student object(name,scores[])
//get average of the sudent score array
//if studentAverage > 50 return true passed else false

function Student(name, scores) {
   
}

const Mary = Student("Mary", [40, 55, 60]);
const Jane =Student("Jane", [30, 40, 35]);


//pseudocode
// constructor movie(title,year,rating)
// function in constructor that retuns classic if year < 2000,
// function in constructor that retuns recommended if rate > 8


function Movie(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;

    this.isClassic = function() {
        return this.year < 2000;
    };

    this.recommend = function() {
        return this.rating > 8 ? "Highly recommended!" : ""; 
    };
};


const movie1 = new Movie("Step sister", 1999, 8.7);
const movie2 = new Movie("Anyone but you", 2010, 8.8);
const movie3 = new Movie("scoop", 2005, 6.2);

console.log(`${movie1.title} is classic: ${movie1.isClassic()}`);  
console.log(`${movie1.title} - ${movie1.recommend()}`);            

console.log(`${movie3.title} is classic: ${movie3.isClassic()}`);  
console.log(`${movie3.title} - ${movie3.recommend()}`);

