var actionType=  "minus"
switch(actionType){
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
function add(a,b){
    var result = a + b;
    console.log(result);
}
add(10,"10");
add.call(10,"10", 10);
//add.call() === add()

function isValid(){
    return;
}

const status = isValid() ? 'Valid' :'Not defined'
console.log(status);
/// user valid or not function
function loginUser(userName,password){
    if(userName === 'admin' && password == 'admin'){
     return true;
    }
}
const validUser = loginUser('admin','admin') ? 'ok' : "not a valid user";
console.log(validUser);

loginUser('admin','admin');


//// N number of argument function
function log(...args){
    console.log(args);

}
log('hello', 'bye')