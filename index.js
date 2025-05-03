//pseudocode
//constructor bank account(name,balance)
//deposit = balance + amount (new balance)
//withdraw condition for insufficient fund/withdrawable

function BankAccount(userName, balance){
    this.userName = userName;
    this.balance = balance;

    this.deposit = function (amount){
        this.balance += amount;
        console.log(`${this.userName} deposited ${amount} New balance: ${this.balance}`);
        return this.balance;
    };

    this.withdraw = function(amount){
        if (amount <= this.balance){
            this.balance -= amount;
            console.log(`${this.userName} withdraw ${amount} New balance: ${this.balance}`);
            return this.balance;
        }else{
            console.log(`${this.userName} tried to wuthdraw ${amount} but has insuffiecient funds.`);
            return "insufficient balance";
        };
    };
};

const account1 = new BankAccount("Linne",500);
const account2 = new BankAccount("Faith",300);
const account3 = new BankAccount("Dan",1000);

account1.deposit(200);
account1.withdraw(100);

account2.deposit(100);
account2.withdraw(500);

account3.withdraw(500);
account3.deposit(100);


//pseudocode
//student object (name,score[])
//get average of the student score array
//if student average > 50 return true passed else false
function createStudent(name,scores){
    return{
        name: name,
        scores: scores,

        getAverage(){
            if (this.scores.length === 0)return 0;
            const total = this.scores.reduce((sum,score) => sum + score,0,);
            return total/this.scores.length;
        },
        hasPassed(){
            return this.getAverage() >=50;
        }
    };
};

const Mike = createStudent("Mike",[70,55,60]);
const Joe = createStudent("Joe",[40,35,49]);

console.log(`${Mike.name} - Average:${Mike.getAverage()}`);
console.log(`${Mike.name} - Passed:${Mike.hasPassed()}`);

console.log(`${Joe.name} - Average:${Joe.getAverage()}`);
console.log(`${Joe.name} - Passed:${Joe.hasPassed()}`);



//pseudocode
//object movie(title,year,rating)
//constructor that returns classic if year < 2000
//constructor that returns highly reccomended if rate is > 8
function Movie(title, year, ratings){
    this.title = title;
    this.year = year;
    this.ratings = ratings;

    this.isClassic = function(){
        return this.year < 2000;
    };

    this.recommend = function(){
        return this.ratings > 8 ? "Highly recommended" : "";
    };
};

const movie1 = new Movie("Step sister", 1999, 8.7);
const movie2 = new Movie("Anyone but you", 2010, 8.8);
const movie3 = new Movie("Scoop", 2005, 6.2);

console.log(`${movie1.title} is classic: ${movie1.isClassic()}`);
console.log(`${movie1.title} - ${movie1.recommend()}`);

console.log(`${movie3.title} is classic: ${movie1.isClassic()}`);
console.log(`${movie3.title} - ${movie3.recommend()}`);














