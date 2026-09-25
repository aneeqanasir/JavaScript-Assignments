var birthMonth = prompt("Enter your birth month")
var newMonth = birthMonth.length
if (newMonth > 3){
    console.log(birthMonth.slice(0 , 3))
}

var institute = prompt("Enter your institute name")
var flag = false
for( var i = 0 ; i < institute.length ; i++){
    if(institute.slice( i , i+4) == "smit"){
        flag = true
        console.log("You are student of SMIT");
    }
    else if (flag === false){
        console.log("You are not student of SMIT");
        
    }
}

var university = prompt("Enter your university name")

if(university.indexOf ("ned") === -1){
    console.log("You belong here")
}else("You don'tt belong here")