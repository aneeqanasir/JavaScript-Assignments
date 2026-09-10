//ques 01 ------------------------
var number = 10
document.write("Value of a var num is "+ number )
document.write("<br>")
number++
document.write("after ++ num is " + number  )
document.write("<br>")
number++
document.write("after again ++ num is " + number  )
document.write("<br>")
number--
document.write("after -- num is " + number  )
document.write("<br>")
number--
document.write("after again -- num is " + number  )
document.write("<br>")
document.write("now the var num is " + number  )
document.write("<br>")

// //ques 02--------------
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
var a = 2 , b = 1
console.log("a = 2");
console.log("b = 1");
console.log("Answer is " + (--a - --b + ++b + b--)) //3 answer

//ques 03-------------
// Write a program that takes input a name from user & greet the user.
var user = prompt("Enter your Name")
alert(" Welcome to my page " + user)

//ques 04 missing
//ques 05--------------
// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var num = +prompt("Enter a num of table")

if(num){
    document.write(num + " * 1 = " + (num * 1) )
    document.write("<br>")
    document.write(num + " * 2 = " + (num * 2) )
    document.write("<br>")
    document.write(num + " * 3 = " +(num * 3) )
    document.write("<br>")
    document.write(num + " * 4 = " +(num * 4) )
    document.write("<br>")
    document.write(num + " * 5 = " +(num * 5) )
    document.write("<br>")
    document.write(num + " * 6 = " + (num * 6) )
    document.write("<br>")
    document.write(num + " * 7 = " + (num * 7) )
    document.write("<br>")
    document.write(num + " * 8 = " + (num * 8) )
    document.write("<br>")
    document.write(num + " * 9 = " + (num * 9) )
    document.write("<br>")
    document.write(num + " *  10  = " + (num * 10) )
    document.write("<br>")

}else{
    document.write(5 + " * 1 = " + (5 * 1) )
    document.write("<br>")
    document.write(5 + " * 2 = " + (5 * 2) )
    document.write("<br>")
    document.write(5 + " * 3 = " + (5 * 3) )
    document.write("<br>")
    document.write(5 + " * 4 = " + (5 * 4) )
    document.write("<br>")
    document.write(5 + " * 5 = " + (5 * 5) )
    document.write("<br>")
    document.write(5 + " * 6 = " + (5 * 6) )
    document.write("<br>")
    document.write(5 + " * 7 = " + (5 * 7) )
    document.write("<br>")
    document.write(5 + " * 8 = " + (5 * 8) )
    document.write("<br>")
    document.write(5 + " * 9 = " + (5 * 9) )
    document.write("<br>")
    document.write(5 + " * 10 = " + (5 * 10) )
    document.write("<br>")
}

// ques 06------------------------

var eng = +prompt("Enter your Marks /100")
var urdu = +prompt("Enter your Marks /100")
var math = +prompt("Enter your Marks /100")
var totalMarks = 300
var obtainMarks = eng + urdu + math
var engper = eng * 100 / 100
var urduper = urdu * 100 / 100
var mathper = math * 100 / 100

var subPer = eng + math + urdu /3

document.write(`
    <table border="1">
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <th>English</th>
            <td>100</td>
            <td>${eng}</td>
            <td>${engper} %</td>

        </tr>
        <tr>
            <th>Urdu</th>
            <td>100</td>
            <td>${urdu}</td>
            <td>${urduper} %</td>

        </tr>
        <tr>
            <th>Math</th>
            <td>100</td>
            <td>${math}</td>
            <td>${mathper} %</td>

        </tr>
        <tr>
            <th> </th>
            <td>${totalMarks}</td>
            <td>${obtainMarks}</td>
            <td>${subPer} %</td>
            

        </tr>
    </table>`)
