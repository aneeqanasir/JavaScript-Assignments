// var fullDate = new Date ()
// console.log(typeof fullDate , fullDate);
// fullDate = fullDate.toString()
// console.log(typeof fullDate , fullDate);

// var day = fullDate.slice(0 , 3)
// console.log("Day: " + day);

// var date = fullDate.slice(4 , 16) 
// console.log("Date: " + date);

// var time = fullDate.slice(16 , 24) 
// console.log("Time: " , time);

// var gmt = fullDate.slice(24 , 33) 
// console.log("GMT: " , gmt);

// var today = new Date() 
// var monthsName = ["Jan" , "Feb" , "Mar" , "Apr", "May" , "Jun" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]
// var month = today.getMonth()
// console.log(monthsName[month]); 

var today = new Date()
var miliSeconds = today.getTime()
console.log(miliSeconds);

var birthday = new Date ("13 , May , 2001")
var birthMili = birthday.getTime()
console.log(birthMili);

var diff =  miliSeconds - birthMili 
console.log(diff);

var sec = diff / 60
console.log("Seconds " ,sec);

var mins = diff / 60
console.log("Minutes " , mins);

var hrs = diff / 24
console.log("Hours " , hrs);

var days = diff / 7
console.log("Days " , days);