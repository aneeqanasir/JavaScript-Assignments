// Chapter 01 ---------------------------------------

// 1. Write a script to greet your website visitor using JS alert box.

alert("Welcome to my Page Aneeqa")

// 2. Write a script to display following message on your web page:

alert("Error! Please enter a valid password")


// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS land... \nHappy Coding!")

// 4. Write a script to display following messages in sequence:
alert("Welcome to JS land...")
alert("Happy Coding!")

// 5. Generate the following message through browser’s developer console:
alert("Hello.. I can run JS through my web browser's console")

// 6. Make use of alerts in your new/existing HTML & CSS project.
// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


// Chapter 02 ---------------------------------------

// 1. Declare a variable called username.
var username = "Arnav Singh"

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Aneeqa Nasir"
console.log(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = "Hello World"
alert(message)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var student ="Aneeqa"
var age ="24"
var data ="Certified Web & App Developer"
alert(student)
alert(age)
alert(data)
//5 Write a script to display the following alert using one JS variable:
alert("PIZZA \nPIZZ \nPIZ \nPI \nP ")

// 6. Declare a variable called email and assign to it a string that represents your Email Address
var email="aneeqanasir@gmail.com"
alert("My email address is " + email )

// 7- Declare a variable called book & give it the value “Asmarter way to learn JavaScript”.Display the following message in an alert box:

var book = "A smarter way to learn JavaScript"

alert("I'm trying to learn from the book " + book)

// 8. Write a script to display this in browser through JS

document.write("Yeah! I can write HTML content through JavaScript")

// 9. Store following string in a variable and show in alert and browser through JS

var string = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(string)

// chapter no 03 ------------------------------------
// ques 1
var age = 25

alert("I'm " + age + " years old" )
//ques 2
var visit = 19

alert("You have visited this page " + visit + " times" )

//ques 3

var name = "Aneeqa"
var quantity = "5 Shirt"
var store = "XYZ Store"
document.write("<br>");
document.write( name + " ordered " + quantity + " (s) from " + store)

//chapter 04 -------------------------
//ques 1
var name = "Aneeqa"
var quantity = "5 Shirt"
var store = "XYZ Store"
document.write("<br>");
//document.write( name + " ordered " + quantity + " (s) from " + store)

//ques 2--------------------------

//legal variables
var numbers = " numbers"
var userName 
var $money  = "$"
var user_name
var underScore = "_"

//illegal variables

// var +Aneeqa
// var aneeqa#20
// var 20names
// var aneeq nasir = ""

// //ques 3----------------------
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("Variable names can only contain " + numbers + " , " + $money + " and  " + underScore + " For example $my_1stVariable")

// chapter 05 -----------------------
//ques no 1
var num1 = 5
var num2 = 3
var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2
var rem = num1 % num2
document.write("<br>" )
document.write("The addition of " + num1 + " and " + num2 + " is " + add )
document.write("<br>" )
document.write("The subtraction of " + num1 + " and " + num2 + " is " + sub )
document.write("<br>" )
document.write("The multiplication of " + num1 + " and " + num2 + " is " + mul )
document.write("<br>" )
document.write("The division of " + num1 + " and " + num2 + " is " + div )
document.write("<br>" )
document.write("The remainder of " + num1 + " and " + num2 + " is " + rem )

//ques 03

var number = 5
document.write("<br>" )
document.write("The initial number is " + number )
number++
document.write("<br>" )
document.write("The value of this variable after increment " + number)
document.write("<br>" )
number = 6 + 7
document.write("The value of this variable after add 7 is " + number)
number--
document.write("<br>" )
document.write("The value of this variable after decrement is " + number)
number = 12%3
document.write("<br>" )
document.write("Now the value is divisible by 3 and the remainder is " + number)

//ques 04--------------

var ticket = 600
var costFive = ticket*5
document.write("The cost of movie tickets is " + costFive + " PKR")

//ques04 ------------
var four = 4
document.write("<br>" )
document.write(" 4 * 1 = " + four*1)
var four = 4
document.write("<br>" )
document.write(" 4 * 2 = " + four*2)
document.write("<br>" )
document.write(" 4 * 3 = " + four*3)
document.write("<br>" )
document.write(" 4 * 4 = " + four*4)
document.write("<br>" )
document.write(" 4 * 5 = " + four*5)
document.write("<br>" )
document.write(" 4 * 6 = " + four*6)
document.write("<br>" )
document.write(" 4 * 7 = " + four*7)
document.write("<br>" )
document.write(" 4 * 8 = " + four*8)
document.write("<br>" )
document.write(" 4 * 9 = " + four*9)
document.write("<br>" )
document.write(" 4 * 10 = " + four*10)
 
//ques 05-------------------------------
var C = 20
var F = (C * 9 / 5) + 32;
document.write("<br>" )
document.write(C + "°C is " + F + "°F");

var F2 = 50
var C2 = (F2 - 32) * 5 / 9; 
document.write("<br>" )
document.write(F2 + "°F is " + C2 + "°C");
