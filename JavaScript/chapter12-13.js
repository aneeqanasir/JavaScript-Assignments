// ques 1--------------------
var A=65, Z=90, a=97, z=122
console.log(A , Z , a , z)

// ques 2--------------------

var num1 = +prompt("First Integer")
var num2 = +prompt("Second Integer")

if(num1 > num2){
    console.log( num1 + " is greater than " + num2)
} else if(num2 > num1){
    console.log( num2 + " is greater than " + num1)
}else{
    console.log( "Both are equal")

}

//ques 3 -------------

var oddEven = +prompt("First Integer")

if(oddEven % 2 === 0 ){
    console.log("This is an even number " + oddEven)
}else if(oddEven % 2 != 0){
    console.log("This is an odd number " + oddEven)
}

// ques 04 ---------------------
var vowels = prompt("Check Vowels")

if(vowels == "a" ||vowels == "A" ||vowels == "e" ||vowels == "E" ||vowels == "i" ||vowels == "I" ||vowels == "o" ||vowels == "O" ||vowels == "u" ||vowels == "U"){
    console.log("TRUE! " + vowels + " is a vowel")
}else {
    console.log(vowels + " is not a vowel!");
}

// ques 05-------------------

var password = "right"

var userPass = prompt("Enter your password!")

if(password === userPass){
    console.log("Correct Password!")
}else{
    console.log("Incorrect Password!")
}
// ques 06 -----------------

var greeting;
var hour = +prompt("How many hours?")

if( hour <= 13 ){
    console.log("Good Day!");
    
}else if(hour > 13){
    console.log("Good Evening!");   
}

// ques 07 -----------------

var time = +prompt("Time... 24hrs Format?")

if (time >= 00 && time <= 12){
    console.log("Good Morning")
}
else if(time >= 13 && time <17){
    console.log("Good Afternoon")
}else if(time >=17 && time < 21){
    console.log("Good Evening");
}
else if(time >=21 && time <= 24){
    console.log("Good Night");
}else{
    console.log("Only 24hrs clock format");
}