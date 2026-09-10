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

