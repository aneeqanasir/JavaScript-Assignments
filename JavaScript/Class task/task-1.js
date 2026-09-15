// for loop

for(var i = 0 ; i < 10 ; i++){
    console.log(i+1 , "Hellow World");
}
var user = +prompt("Enter a number") || 5
var multiple = +prompt("How many multiple") || 10

// user = user || 5
// multiple = multiple || 10

for (var i = 1 ; i <= multiple ; i++){
    document.write (` ${user} x ${i} = ${i * user} <br>`);
} 