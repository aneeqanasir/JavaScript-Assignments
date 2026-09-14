// ques 1 & 2================== 
//literal notation
var array = []
// object notation
var array2 = new Array()
console.log(array , array2)

// quse 3------------------

var string = ["Hania " , "Komal"]
console.log(string);

// quse 4------------------

var number = [20 , 40 , 60]
console.log(number);

// quse 5------------------

var boolean = [true , false]
console.log(boolean);

//ques 06==========

var mixedArray = ["Komal"  , 100 , null , undefined , boolean]

console.log(mixedArray)

//ques 07 ============

var edu = ["SSC", "HSC", 'BCS', 'BS' , 'B.COM', 'MS' , 'M.PHILL' , 'PhD']

document.write("01- <b> " + edu [0] + "</b> <br>")
document.write("02- <b> " + edu [1] + "</b><br>")
document.write("03- <b> " + edu [2] + "</b><br>")
document.write("04- <b> " + edu [3] + "</b><br>")
document.write("05- <b> " + edu [4] + "</b><br>")
document.write("06- <b> " + edu [5] + "</b><br>")
document.write("07- <b> " + edu [6] + "</b><br>")
document.write("08- <b> " + edu [7] + "</b><br>")

//ques 08==========
var students= ["Hania" , "Aneeqa" , "Komal" ]
var scores = [350 , 420 , 480]
percentage = [(scores[0]) / 500 * 100 , (scores[1]) / 500 * 100, (scores[2]) / 500 * 100]

document.write(`<h2>Score of ${students[0]} is ${scores[0]}. Percentage is ${percentage[0]} %</h2>  `)
document.write(`<h2>Score of ${students[1]} is ${scores[1]}. Percentage is ${percentage[1]} %</h2>  `)
document.write(`<h2>Score of ${students[2]} is ${scores[2]}. Percentage is ${percentage[2]} %</h2>  `)

//ques 09 ============


var colors = ["Pink", "Blue" , "Grey" , "Black" , "White"]
console.log(colors);

var userStart = prompt("What color you want to add in beginning?")
colors.unshift(userStart)
console.log(colors);

var userEnd = prompt("What color you want to add in the end?")
colors.push(userEnd)
console.log(colors);

colors.unshift("Brown", "Purple")
console.log(colors);

colors.shift(0)
console.log(colors);

colors.pop()
console.log(colors);

var addIndex = +prompt("What index you want to add color")
var clrIndex = prompt("Which Color you want to add?")
colors.splice(addIndex , 0 , clrIndex)
console.log(colors);

var deltIndex = +prompt("What index you want to Delete color")
var deltClr = prompt("How many colors you want to delete?")

colors.splice(deltIndex , deltClr)
console.log(colors);

//qies 10----------------

var numbers = [300, 289, 678, 290]
console.log(numbers)
numbers.sort()
console.log("After ascending order: " +numbers)

//ques 11 ================

var cities = ["Karachi" , "Lahore" , "Peshawar" , "Multan" , "Hyderabad"]
console.log(cities);

var selectedCities = cities.slice(1 , 4)
console.log(selectedCities);

var fruits = ["Apple" , "Mange" , "Banana", "Grapes"]
console.log(fruits);
console.log(fruits.join(" "));

console.log("Fruirs names: " + fruits.join(" | "));

//ques 12=================

var arr = []

arr.push(prompt("Enter first value:"));
arr.push(prompt("Enter second value:"));
arr.push(prompt("Enter third value:"));
console.log(arr);

console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());

//ques 14===========

var arrReverse = []

arrReverse.push(prompt("Enter first value:"));
arrReverse.push(prompt("Enter second value:"));
arrReverse.push(prompt("Enter third value:"));
console.log(arrReverse);

console.log(arrReverse.pop());
console.log(arrReverse.pop());
console.log(arrReverse.pop());

//quse 15 ----------------

var mobiles = ["iPhone" , "Samsung" , "Motrola" , "Nokia" , "Sony"]
document.write(`<option >
        <select >${mobiles[0]}</select>
        <select >${mobiles[1]}</select>
        <select >${mobiles[2]}</select>
        <select >${mobiles[3]}</select>
    </option>`)