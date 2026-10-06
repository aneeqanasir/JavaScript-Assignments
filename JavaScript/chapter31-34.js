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
