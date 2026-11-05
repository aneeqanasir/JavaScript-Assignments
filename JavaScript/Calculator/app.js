var display = document.getElementById("display");
var num1 = ""
var operator = ""
var num2 = ""
var isSecondNum = false
function addToDisplay(input) {
   
    var isOperator = input == "+" || input == "-" || input == "*" || input == "/" || input == "%"

    display.value += input;
    console.log(input);
    if(isOperator && isSecondNum && num2 == ""){
        operator = input
        display.value = display.value.slice(0 , -1)
    }
    else if(!isOperator && !isSecondNum ){
        num1 += input 
    console.log("num1 ",num1);

    }else if(!isSecondNum && isOperator){
        operator = input
        isSecondNum= true
    console.log("op ",input);

    }else if(isSecondNum && !isOperator ){
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

function deleteNumber(e){
    var display = document.getElementById("display")
    display.value = display.value.slice(0 , -1)
    
}