var birthMonth = prompt("Enter your birth month")
var newMonth = birthMonth.length
if (newMonth > 3){
    console.log(birthMonth.slice(0 , 3))
}

var institute = prompt("Enter your institute name")
var flag = false
for( var i = 0 ; i < institute.length ; i++){
    if(institute.slice( i , i+4) == "smit" || institute.slice( i , i+6) == "aptech" ){
        flag = true
        console.log("Participate in Hackathon");
    }
}if(!flag){
    console.log("You can't participate in hackathon")
}

var university = prompt("Enter your university name")

if(university.indexOf("ned") === -1){
    console.log("You don't belong here")
}
else{
    console.log("You belong here");
    
}

for (var s = 0 ; s <= 5 ; s++){
    for(t = 0 ; t <=s ; t++){
        document.write("*");
        
    }
    document.write(`<br>`);
}
