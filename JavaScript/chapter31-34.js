// Date Methods
//question 1 ----------
var dateMethod = new Date()
console.log(dateMethod);
 
//Question 2 -------

var currentMonth = new Date ()
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = currentMonth.getMonth(monthName)
console.log("Current month: " , monthName[month]);

//question 3 -------
var days = new Date ()
var currentDay = days.getDay()
var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
console.log(daysName[currentDay]);

//question 4
var dayToday = new Date()
var funDay = dayToday.getDay()
var fullDaysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
if(funDay === 0 || funDay === 6){
    console.log("It's Fun Day ");
    
}else{
    console.log("Today is ", fullDaysName[funDay]);
    
}

// question 5 ------------
var newDate = new Date ()
var fullDate = newDate.getDate() 
 if( fullDate >= 1 && fullDate <= 15){
    console.log("First fifteen days of the month");
    
 } else if(fullDate >= 16 && fullDate <= 31){
    console.log("Last fifteen days of the month");
    
 }

//question 6 ----------
var dateCurrent = new Date ()
console.log(dateCurrent);
var milisecond1970 = dateCurrent.getTime()
console.log("Miliseconds since 1970" ,milisecond1970);
var seconds = milisecond1970 /1000
var minutes = seconds / 60
console.log("Minutes since 1970" , minutes);

// question 07

var Time = new Date()
var getTime = Time.getHours()
console.log(getTime);
if(getTime >= 12 ){
    console.log("It's P.M")
}else{
    console.log("It's A.M");
    
}

//question 08 -------

var lastDate = new Date(2020, 11, 31)
console.log(lastDate);

//question 09
var currentDate = new Date ()
var ramadanCount = new Date("February 7, 2027")
var dateBefore = currentDate.getTime()
var ramadanBefore = ramadanCount.getTime()

var diff = ramadanBefore - dateBefore
var daysDiff= Math.floor(diff / (1000 * 60 * 60 * 24)) 
console.log(daysDiff , " days left in Ramadan 2027"); // 1000 sy divide krny pr milisecond sy second ma convert hoga

// question 10
// make a program which referce the second of the year 2026 from beginning till now

var year = new Date ()
var startYear = new Date("1 january 2026")
var endYear = year.getTime() /1000
var startSeconds = startYear.getTime() /1000

var difference = Math.floor(endYear - startSeconds)
console.log(difference , " seconds passed till 1 january 2026");

// queation 11

var dateHours = new Date()
var hours = dateHours.getHours()
dateHours.setHours(hours + 1)
console.log(dateHours);

// question 12
var back100Years = new Date ()
console.log("Current Date ", back100Years);

var backDate = back100Years.getFullYear()
back100Years.setFullYear(backDate - 100)
console.log("Back to 100 years" , back100Years);

// question 13

var userDOB = +prompt("Enter your age")
var dateDOB = new Date ()
var yearDOB = dateDOB.getFullYear()

var diffDOB = yearDOB - userDOB
console.log(diffDOB);

// question 14
document.write (`<h1>K-Electric Bill</h1> `)
var customer = prompt("Enter your name")
document.write("Customer Name: " , customer , "<br>")

var month = prompt("Month")
document.write("Current Month: " , month , "<br>")

var units = prompt("Number of Units")
document.write("Number of Units: " , units , "<br>")

document.write("Charges per unit: 16 <br>")

var kElectric = units * 16
document.write("Net Amount Paybill (within due date): ", kElectric ,"<br>")
document.write("Late payment charges: 350 <br>")
document.write("Gross amount Paybill (after due date): ", (kElectric + 350), "<br>")
