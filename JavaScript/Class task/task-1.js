// for loop

for(var i = 0 ; i < 10 ; i++){
    console.log(i+1 , "Hellow World");
}
var user = +prompt("Enter a number")
var multiple = +prompt("How many multiple")

user = user || 5

for (var i = 1 ; i <= multiple ; i++){
    document.write (` ${user} x ${i} = ${i * user} <br>`);
} 