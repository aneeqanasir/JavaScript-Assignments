function hypo(base , para){
    function square(a){
        return a * a
    }
    var hypo = square (base) + square(para)
    var hypoSquare = Math.sqrt(hypo).toFixed(2)
    return hypoSquare
}
console.log(hypo(3 , 6));



function palidrome (str){
    var reverse = ""
    for (var i = str.length-1 ; i >=0 ; i --){
        reverse = reverse+str[i]
    }
    console.log(str + reverse );
if(str === reverse){
    console.log(str , " is a palindrome word");
}
else{
    console.log(str , " is not palindrome word");
}
 return palidrome
}
var string = prompt("Enter you palidrome words").toLowerCase()

palidrome(string)