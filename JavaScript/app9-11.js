var city = prompt("Enter your city ")
if( city === "karachi" || city === "Karachi" || city === "KARACHI"){
    alert("Welcome to the city of lights!")
}
// QUES 02--------------------
var gender= prompt("Enter your gender")
if(gender === "female" || gender === "Female" || gender === "FEMALE"){
    alert("Good Morning Ma'am!")
}else if(gender === "male" || gender === "male" || gender === "MALE"){
    alert("Good Morning Sir!")
}else{
    alert("Good Morning! ")
}

// QUES 03---------------------------------
var signalClr = prompt("What's the color of Signal right now")
var red = "Must Stop"
var yellow = "Ready to move"
var green = "You can GO!"

if(signalClr === "red" || signalClr === "Red" || signalClr === "RED" ){
    alert(red)
}else if(signalClr === "yellow" || signalClr === "Yellow" || signalClr === "YELLOW"  ){
    alert(yellow)
}else if(signalClr === "green" || signalClr === "Green" || signalClr === "GREEN"  ){
    alert(green)
}else{
    alert("Drive Safely! ")
}
 //QUES 04===========================

var fuel = prompt("How much fuel is remaining?")
if (fuel < 0.25){
    alert("Please ! refill the fuel in you car")
}

// ques 05==================

// ------------A----------------
var a = 4
if (++a === 5){
    console.log("The condition will be true" )
}

// -----------B------------
var b = 82
if (b++ === 83){
    console.log("The condition will be false" )
 
}
// ---------------C--------------------------
 var c = 12;
if (c++ === 13){
    console.log("The condition will be false" )
    
}
// ---------------D--------------------------
if (c === 13){
console.log("condition is True")}
// ---------------E--------------------------

if (++c < 14){
console.log("condition  is flase");
}

if(c === 14){
console.log("condition is true");
}

// ------------------------------------d--------------------------
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
console.log("The cost equals " + totalCost + " True");
}

// QUESTION 6

var obtainMarks1 = +prompt("First Subject Marks out of 100")
var obtainMarks2 = +prompt("Secind Subject Marks out of 100")
var obtainMarks3 = +prompt("Third Subject Marks out of 100")

var obtainTotal = obtainMarks1+ obtainMarks2+ obtainMarks3
var percentage = (obtainTotal / 300 *100)
console.log("Total marks of all subjects are : " + obtainTotal + ". Percentage: " + (obtainTotal / 300 *100)+ " %");
if(obtainMarks1 <= 100 && obtainMarks2 <= 100 && obtainMarks3 <= 100 && obtainMarks1 >= 0 && obtainMarks2 >= 0 && obtainMarks3 >= 0){
    if(percentage >= 80 && percentage <= 100 ){
        console.log("You got A+ Grade")
    }else if( percentage < 80 && percentage >= 70 ){
        console.log("You got A Grade")
    }else if (percentage < 70 && percentage  >= 60){
        console.log("You got B Grade")
    }else if (percentage >50 && percentage < 60){
        console.log("You got C Grade")
    }else {
        console.log("You are FAIL!")
    }
}
else{
    console.log("Invalid Numbers")
}

// Question 7
var hiddenNum = 8
var secretNum = +prompt ("Guess the Secret Number 1 to 10")
if (secretNum === hiddenNum){
    console.log ("Bingo! Correct Answer")
}else if (secretNum == 7 || secretNum == 9){
    console.log ("You are so close")
}
else{
    console.log("Try again");
    
}

// Question 8

var divisible = +prompt ("Enter the number divisible by 3")
if(divisible % 3 ==  0){
    console.log("Divisible by 3")
}
else {
console.log("Not divisible by 3")

}

// Question 9

var odd = +prompt ("Check even or odd number")

if (odd % 2 == 0){
    console.log("It is an even number")
} else{
    console.log("Its an odd number")
}
  
// Question 10 

var weather = prompt("How's the weather")
if(weather > 40 ){
    console.log("It's too hot Outside")
}
else if(weather < 40 && weather >= 30 ){
    console.log("Today's weather is normal")
}
if(weather < 30 && weather >= 20 ){
    console.log("Today's weather is cool!")
}
if(weather < 20 && weather >= 10 ){
    console.log("OMG! Today's weather is too cool!")
}



// Question 11

var userNumber1 = +prompt ("First number")
var userNumber2 = +prompt ("Second number")
var operation = prompt ("Operation")

if(operation == "+"){
    console.log(userNumber1 + userNumber2)
}else if(operation == "*"){
    console.log(userNumber1 * userNumber2)
}
else if(operation == "-"){
    console.log(userNumber1 - userNumber2)
}
else if(operation == "/"){
    console.log(userNumber1  / userNumber2)
}
else if(operation == "%"){
    console.log(userNumber1 % userNumber2)
}
