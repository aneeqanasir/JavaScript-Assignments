var display = document.getElementById("display");
var num1 = ""
var operator = ""
var num2 = ""
var isSecondNum = false
function addToDisplay(input) {
    display.value += input;
    console.log(input);

    if(!isSecondNum && input !== "+" && input !== "-" && input !== "*" && input !== "/" && input !== "%" ){
        num1 += input 
    console.log("num1 ",num1);

    }else if(!isSecondNum && input == "+" || input == "-" || input == "*" || input == "/" || input == "%"){
        operator = input
        isSecondNum= true
    console.log("op ",input);

    }else if(isSecondNum && input !== "+" && input !== "-" && input !== "*" && input !== "/" && input !== "%" ){
        num2 += input
    console.log("num2 ",num2);

    }

}
var result = ""
function calculateEqual(){
   
    num1 = Number(num1)
    num2 = Number(num2)

    if(operator === "+"){
        result = num1+num2
    }else if(operator === "-"){
        result = num1-num2
}
    else if(operator === "*"){
        result = num1*num2
}
    else if(operator === "/"){
        result = num1/num2
}

display.value = result
num1 = result
num2 = ""
operator = ""
isSecondNum = false
}

function clearDisplay(){
    display.value=""
    num1 = ""
    num2 = ""
    operator = ""
    isSecondNum = false
    

}