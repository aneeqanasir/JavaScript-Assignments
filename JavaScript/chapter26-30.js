// // Math Methods 

// // Question 1
// // Positive Intiger
var userNum = +prompt("Enter a decimal number")
var roundOff = Math.round(userNum)
var ceil = Math.ceil(userNum)
var floor = Math.floor(userNum)
console.log("Number is "+ userNum +" Round off digits: " + roundOff);

var ceil = Math.ceil(userNum)
console.log("Number is "+ userNum +" After ceil digits: " + ceil);

var floor = Math.floor(userNum)
console.log("Number is "+ userNum +" After floor digits: " + floor);

// // Question 2
// // Negative Intiger
var negativeNum = +prompt("Enter a negative decimal number")
var negRound = Math.round(negativeNum)
var negCeil = Math.ceil(negativeNum)
var negFloor = Math.floor(negativeNum)
console.log("Number is " + negativeNum +" Round off digits: " + roundOff);

var ceil = Math.ceil(negativeNum)
console.log("Number is "+ negativeNum +" After ceil digits: " + ceil);

var floor = Math.floor(negativeNum)
console.log("Number is "+ negativeNum +" After floor digits: " + floor);

// // question 3-----------
// // Absolute value number ko positive number ma badl deti hay, minus ka num change ho kr plus ka hjaega!
var absValue = +prompt('Enter a number')
var absResult = Math.abs(absValue)
console.log("Absolute Value " + absResult); 

//question 04
// Dice Game

var dice =  Math.random()*6;
++dice
var diceRoll = Math.round(dice)
console.log("Random Dice Value is " + diceRoll);


// question 05
// Head Tails Game

var coin = prompt("Choose Heads or Tails?")
var numCoin = (Math.random() * 2 )+ 1 
var tossed = Math.floor(numCoin)
var coinResult = ""
console.log(tossed);

if (tossed === 1){
    coinResult = "heads"
}else{
    coinResult = "tails"

}
if (coin === coinResult){
    alert("You win! Your coin is landed on " + coinResult)
}else if(coin === "heads" || coin === "tails"){
    alert("You lose! Your coin is landed on " + coinResult)

}else{
    alert("Invalid Input")
}

// question 6

var randomNum = Math.random()* 101
var randomRoundOff = Math.round(randomNum)
document.write("Random Number between 1 to 100: " + randomRoundOff)

// question 7

var userWeight = prompt("Enter you weight")
var weight = parseFloat(userWeight)
console.log("Your weight is " + weight + " Kilograms" )

// question 8

var secretNum = 8
var userSecret = +prompt("Guess the secret number")

if(userSecret === secretNum){
    alert("Congrats! You guess it right!")
}else if (userSecret === 7 || userSecret === 9){
    alert("You are close enough")
}else{
    alert("Wrong! Try again")
}