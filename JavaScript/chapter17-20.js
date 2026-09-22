//question 1 --------------------
var arrays = [[1 , 2 , 3 , 4], [0, 1 , 2, 4], [4, 3, 2, 1]]

console.log(arrays[2][0]);

//question 2 --------------------
var multiArray = [[1 , 2 , 3 , 4], [0, 1 , 2, 4], [4, 3, 2, 1]]
console.log(multiArray[0])
console.log(multiArray[1])
console.log(multiArray[2])

//question 3--------------
//counting 1 to 10

for (var i = 1 ; i <= 10 ; i++){
    console.log(i); 
}

//question 3--------------
// table from user
var table = +prompt("Enter a number for table")
var length = +prompt("Enter the length of table")

for( var i = 1 ; i <= length ; i++){
    document.write( ` ${table} x ${i} = ${table * i} <br>` )
    
}
// quetion 4 ---------------"
var fruits = ["apple", "banana", "mango", "orange","strawberry"]

document.write(fruits + "<br>")
document.write(`Element at 0 index is ${fruits[0]} <br>`)
document.write(`Element at 1 index is ${fruits[1]} <br>`)
document.write(`Element at 2 index is ${fruits[2]} <br>`)
document.write(`Element at 3 index is ${fruits[3]} <br>`)
document.write(`Element at 4 index is ${fruits[4]} <br>`)

// question 5 -----------
document.write(`Counting <br>`)
for (var i = 1 ; i <= 10 ; i++){
    document.write(i); 
}
document.write(`<br>`)
document.write(`Reverse Counting <br>`)

for (var i = 10 ; i >= 1 ; i--){
    document.write(i ); 
}
document.write(`<br>`)
document.write(`Even Numbers <br>`)
for (var a = 0 ; a <= 30 ; a+=2){
    document.write(a); 
}
document.write(`<br>`)
document.write(`Odd Numbers <br>`)
for (var o = 1 ; o <= 30 ; o+=2){
    document.write(o); 

}
document.write(`<br>`)
document.write(`Series <br>`)
for (var s = 2 ; s <= 20 ; s+=2){
    document.write(s + "k"); 

}

// question 6 ----------------

var bakery = ["cake" , "pastery" , "cookies" , "sweets" , "brownie" , "chips"]
var customer = prompt("Search the bakery items!")
var flag = false
for(var f = 0 ; f < bakery.length ; f++){
    if(customer === bakery[f]){
        flag = true
        console.log(customer + " is available");
        
    }
}
if (flag == false){
    console.log( "Sorry! " + customer + " is not available");
    
}

//question 7 ----------

var lgNum = [24 , 101 , 34 , 70 , 88]
var largest = 0
for (var l = 0 ; l < lgNum.length ; l++){
    if(lgNum[l] > largest)
        largest = lgNum[l]
}
console.log("Largest number is " + largest);

//question 8 --------------------

var smallNum = [13 , 20 , 28 , 45 , 10]
var smallest = smallNum[0]

for( var m = 0 ; m < smallNum.length ; m++){
    if(smallNum[m] < smallest){
         smallest = smallNum[m] 
}
}
console.log("Smallest num is " + smallest)

//question 9 -----------
document.write("<br> Increment of 5")
for (var v = 5 ; v <= 50 ; v+=5){
    document.write("<br>" + v);
}