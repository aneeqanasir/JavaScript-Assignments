//question 01-------------------------------
var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")

//question 02-------------------------------

var  newName = firstName + lastName
alert("Welcome to my page" + " " + newName)

var phone = prompt("Enter your favourite phone")
console.log("Length of string is "+ phone.length)

//question 03-------------------------------

var firstIndex = prompt("enter a word with letter n")
console.log("First index of "+ firstIndex + " is " + firstIndex.indexOf("n"))

//question 04-------------------------------

var lastIndex = prompt("enter a word with letter l")
console.log("Last index of "+ lastIndex + " is " + lastIndex.lastIndexOf("l"))

//question 05-------------------------------

var thirdIndex = prompt("Find the 3rd index of your word")
console.log("3rd index of character "+ thirdIndex + " is " + thirdIndex[3])

//question 06-------------------------------

var city = "Hyderabad"
var newCity = city.replace('Hyder' , 'Islam')
console.log(newCity);

//question 07-------------------------------

var para = "Ali and Sami are best friends. They play cricket and football together"
var newPara = para.replace( /and/g , "&") // /and /g ----- [means change all globally]
console.log(newPara);

//question 08-------------------------------

var num472 = 472
console.log("Type of 472: " + typeof(num472));

var str472 = '472'
console.log("Type of '472': " + typeof(str472));

//question 09-------------------------------

var capital = prompt("Enter a word")
var newCapital = capital.toUpperCase()

console.log(newCapital);

//question 10-------------------------------

var titleCase = prompt("Enter something")
var newTitle = titleCase.slice(0 , 1)
var upperTitle = newTitle.toUpperCase()
var removeJ = titleCase.slice(1 , titleCase.length)
console.log(upperTitle +  removeJ);

//question 11-------------------------------

var num32 = 35.36
var result = num32.toString().replace("." , "" )
console.log(result);

//question 12-------------------------------

var symbols = prompt("Don't use these symbols @ ! , .")
var newSymbols  = symbols.charCodeAt()

if (newSymbols === 33 || newSymbols === 44 || newSymbols === 46 || newSymbols === 64) {
    alert("These symbols are not allowed!")
}

//question 13-------------------------------

var bakery = ["cake" , "cookies" , "pizza" , "ice-cream" , "patties" , "brownie" , "sweets" , "chips"]
var flagBakery = false
var userBakery= prompt("Search bakery items")

for(var i =0 ; i <= bakery.length ; i++){
    bakery[i]
    if(bakery[i] === userBakery){
        flagBakery= true
        alert(userBakery + " is avaialable on index " + i)
    }
}
if(!flagBakery){
    console.log("Sorry! "+ userBakery +" is not availabale");
}

//question 14-------------------------------

// a-z 97 - 122
// A-Z 65 - 90
// 0-9 48-57

var password = prompt("Enter a strong password")
var hasCapital = false
var hasSmall = false
var hasNumber = false
var startNumber = false
if(password.length < 6){
    alert("Enter a 6 digit password")
}
for(var p = 0 ; p < password.length ; p++){

var newPass = password.charCodeAt(p)
if(newPass >= 97 && newPass <= 122){
    hasSmall = true
}
if(newPass >= 65 && newPass <= 90){
    hasCapital = true
}
if(newPass >= 48 && newPass <= 57){
    hasNumber = true
}
if(p === 0 && newPass >= 48 && newPass <= 57){
    startNumber=true
}
}
if (!hasCapital){
    alert("Must contain Capital Alphabet")
}
if (!hasSmall){
    alert("Must contain Small Alphabet")
}
if (!hasNumber){
    alert("Must contain Number ")
}
if (startNumber){
    alert("Can't start with a number")
}

//question 15-------------------------------

var uni = "University of Karachi"

for (var u = 0; u < uni.length ; u++){
    console.log(uni[u])
}

//question 16-------------------------------

var userCity = prompt("Enter your City")
console.log("Last index of " + userCity+ " is "+ userCity[userCity.length-1]);

//question 17-------------------------------

var sentence = "The quick brown fox jumps over the lazy dog"
var count = 0
var newSentence = sentence.toLowerCase().split(" ")
console.log(newSentence);
for(var s = 0 ; s < newSentence.length; s++){
    if(newSentence[s] === "the"){
        count++
        console.log(count)
    }
}