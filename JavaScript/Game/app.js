var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0
function animation(){
    console.log(event.keyCode);
    if(event.keyCode == 39 && left < 1490){
        left = left+10
        char1.style.left = left +"px"
        char1.src = "Assests/gifs/walking.gif"
        
        setTimeout(()=>{
            char1.src = "Assests/gifs/standing.gif"
        }, 1000
        )
    }
}
window.onkeydown = animation