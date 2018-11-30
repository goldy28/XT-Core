var actionType = "minus"
switch (actionType) {
    case "add":
        console.log("add is called");
        break;
    case "minus":
        console.log("minus is called");
        break;
}
function checkValue() {
    var abc = document.getElementById('textfield').value;
    console.log(abc);
    if (abc <= 5) {
        // console.log("dsds");
        document.getElementById('text').innerHTML = "value is fine";
    }
    else {
        document.getElementById('text').innerHTML = "value is not correct";
        // console.log("dsasdfds");

    }
}
function add(a, b) {
    var result = a + b;
    console.log(result);
}
add(10, "10");
add.call(10, "10", 10);
//add.call() === add()

function isValid() {
    return;
}

const status = isValid() ? 'Valid' : 'Not defined'
console.log(status);
/// user valid or not function
function loginUser(userName, password) {
    if (userName === 'admin' && password == 'admin') {
        return true;
    }
}
const validUser = loginUser('admin', 'admin') ? 'ok' : "not a valid user";
console.log(validUser);

loginUser('admin', 'admin');


//// N number of argument function
function log(...args) {
    console.log(args);

}
log('hello', 'bye');

/// invoking function methods
// way 1
function sayhello() {
    return 'hello'
}
const hello = sayhello;
console.log(hello());

// es 6
const greetMe = (name) => console.log(name);
greetMe('Goldy');


// if no args and parameter : empty brackets
const tap = _ => console.log('fetching records');
tap();


function employee() {

}
let person = new employee();
//////////////////
function sessionStart() {
    function trainer(name) {
        this.name = name;
        this.doteach = function (sub) {
            console.log(this.name + "teaching" + sub);
            let that = this;
            let notes = "js notes"
            let dolearn = function () {
                console.log(this.name + "learning " + sub + "with" + notes + "from" + that.name);
            }
            console.log('teaching ends')
            return dolearn
        }
    }
    function employee(name) {
        this.name = name;
    }
    const tnr = new trainer('goldy');
    const e1 = new employee('E1')
    const e2 = new employee('E2')
    const dolearn = tnr.doteach('.js');
    dolearn.call(e1);
    const e2learnfunction = dolearn.bind(e2)
    e2learnfunction()
    e2learnfunction();
}
sessionStart();
////////////////////////////
// // has - relation ship with 
// class Order{
//     constructor(orderid = '00AA', value = 0){
//         this.orderid = orderid;
//         this.value =  value;
//     }
// }
// class Customer{
//     constructor(id=1, name= 'name',order = new Order()){
//         this.id = id;
//         this.name = name;
//         this.order = order;
//     }
// }
// let order = new Order('esews', 1000);
// let Customer = new Customer(2, 'goldy',order );
// console.log(customer);
/////////////////////////////////////////////////////////
// IS - A realtionship : inheritance:

function Account() {
    this.id = 1;
    this.name = 'goldy';
    this.calculateInterest = function () {
        return 20;
    }
}
const acc1 = new Account();
acc1.id = 100;
console.dir(acc1);

const acc2 = new Account();
acc2.id = 200;
console.dir(acc2);


// prototype inheritance

function Person() {
    console.log("Person method")
}

function employee() {
    console.log("employee method")
}
employee.prototype = Object.create(Person.prototype);
const emp1 = new employee('goldy');
console.log(emp1.name);
const emp2 = new employee('katrthikl');
console.log(emp2.name);

const emp3 = new employee('sushil');
console.log(emp3.name);

////super class///////////////
class Account1 {
    constructor(balance) {
        console.log('Account constructor');
        this.balance = balance
    }
}
class SavingsAccount extends Account1 {
    constructor(accno = 1, name = 'name', balance) {
        super(balance);
        this.accno = accno;
        this.name = name;
        console.log('Savings Account');
    }
}
const sa = new SavingsAccount(1, 'Vinamra', 50000);
console.log(sa.accno, sa.name, sa.balance);

const sa1 = new SavingsAccount(13, 'Goldy', 100000);
console.log(sa1.accno, sa1.name, sa1.balance);

const video = {
    genere: "sc fi",
    list: ['a', 'b', 'c'],
    findMoview() {
        var self = this;
        this.list.forEach(function (movie, index) {
            console.log(self.genere + ' ' + movie);
        })
    }
}
video.findMoview();
/////////////////////////
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });
    let result = await promise//wait till the promis resolves
    console.log(result);
}
f();
////////////////////////////////////////////////////////
async function getUsers(url) {
    let response = await fetch(url);
    let body = await response.json()
    return body;
}
getUsers('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));

class  Waiter {
    async wait() {
        return  await  Promise.resolve(13333);
    }
}
new  Waiter().wait().then(res => console.log(res));


async function errorHandler(){
    try{
        let result1 = await Promise.resolve('hey-1');
        console.log(result1)
    }
    catch(er){
        console.log(er)

    }
    finally{
        console.log('completed')

    }
}

