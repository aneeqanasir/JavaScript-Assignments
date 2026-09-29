// a-z 97 - 122
// A-Z 65 - 90
// 0-9 48-57

var password = prompt("Enter your password")
var hasCapitalAlpha = false
var hasSmallAlpha = false
var hasNum = false
if(password.length < 6 ){
    alert("Password must contain 6 characters!")
}
for(var i = 0; i < password.length; i++){
    var code = password.charCodeAt(i)
    console.log(password, code , i) // show password , then keyboard code, then index number

    if(code >= 65 && code <= 90){
        hasCapitalAlpha = true
    }
    if(code >= 97 && code <= 122){
        hasSmallAlpha = true
    }
    if(code >= 48 && code <= 90){
        hasNum = true
    }
}
if(!hasCapitalAlpha){
    alert("Must contain Capital alphabets")
}
if(!hasSmallAlpha){
    alert("Must contain Small alphabets")
}
if(!hasAlpha){
    alert("Must contain alphabets")
}
if(!hasNum){
    alert("Must contain Numbers")
}