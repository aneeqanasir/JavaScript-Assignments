// Function
// question 1 ----------
function date() {
    var today = new Date ()
    var currentDate = today
    console.log(currentDate);
}
date()

// question 2 ------------

// function names (firstName , lastName){
//     console.log("WELCOME " , firstName , lastName )
// }
// var firstName = prompt("First Name")
// var lastName = prompt("Last Name")
// names(firstName , lastName)

// question 3 ------------

function number(a , b){
    var sum = a + b
    console.log(sum);
    
}
number(2 , 5)

// question 3 ----------

// function calculator(num1 , opr , num2){
//     if(opr === "+"){
//         console.log(num1 + num2);
        
//     }
//     else if(opr === "-"){
//         console.log(num1 - num2);
        
//     }
//     else if(opr === "*"){
//         console.log(num1 * num2);
        
//     }
//     else if(opr === "/"){
//         console.log(num1 / num2);
        
//     }
//     else{
//         console.log("Invalid Operator");
        
//     }
// }
// var num1 = +prompt("Number 1")
// var num2 = +prompt("Number 2")
// var opr = prompt("Operator")
// calculator(num1 , opr , num2)

// question 5 -------

function hello(string){
    console.log(string);
    
}
hello("Hello World")

// question 6

function factorial(num) {
    var result = 1;

    for (var i = num; i >= 1; i--) {
        result = result * i;
    }

    console.log(result);
}

factorial(4);

// question 7

function count(){
    for (var i = countS ; i <= countE ; i++){
        console.log(i);
        
    }
}
var countS = prompt("Start count from")
var countE = prompt("End count to")
count()