// question 8 -----

// var A = [24, 53, 78, 91, 12]



// //Nested Loop===============

// for (var i = 1 ; i <= 4 ; i++){
//     for(var j = 1 ; j <=5 ; j++){
//         document.write(" * ")
//     } 
//     document.write("<br>")
// }

// for (var a = 1 ; a <= 4 ; a++){
//     for(var b = 1 ; b <= a ; b++){
//        document.write("*")
//     }
//     document.write("<br>")

// }

var userRow = +prompt("Number of rows")
var userCol = +prompt("Number of Stars")

for (var i = 1 ; i <= userRow ; i++){
    for(var j = 1 ; j <= userCol ; j++ ){
        document.write(("*"));
    }
    document.write("<br>")
}