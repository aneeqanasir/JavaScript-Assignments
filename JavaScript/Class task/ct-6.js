var headTail = prompt("Choose head or tail")
var num = Math.random() *2
var coin = (Math.floor(num) +1) 
console.log(coin);
var result = ""

if (coin === 1){
    result = "heads"  
}
else (coin === 2){
    result = "tails"
}

if(headTail === result){
    console.log("You win! You landed on " + result );
}
else if(headTail === "heads" || headTail === "tails"){
    
}