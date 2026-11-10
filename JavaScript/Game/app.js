var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0
var right = 990
function animation(event){
    console.log(event.keyCode);
    if(event.keyCode == 39 && left < 1490){
        left = left+10
        char1.style.left = left +"px"
        char1.src = "Assests/gifs/leona running.gif"
        char1.style.transform= "scaleX(1)"
        
        setTimeout(()=>{
            char1.src ="Assests/gifs/leona standing.gif"
        }, 1000
        )
    }
    if(event.keyCode == 37 && left > 40){
        left = left-10
        char1.style.left = left +"px"
        char1.src = "Assests/gifs/leona running.gif"
        char1.style.transform= "scaleX(-1)"
        setTimeout(()=>{
            char1.src = "Assests/gifs/leona standing.gif"
        }, 1000
        )
    }

    if(event.keyCode === 65){
        char1.src = "Assests/gifs/fighting2.gif"
        char1.style.height = "250px"
        
        setTimeout(()=>{
            char1.src = "Assests/gifs/leona standing.gif"
            char1.style.height= "220px"

        },2500)
    }
    if(event.keyCode == 38){
        char1.src = "Assests/gifs/char1 up.gif"
            char1.style.height= "330px"

    setTimeout(()=>{
            char1.src = "Assests/gifs/leona standing.gif"
            char1.style.height= "220px"

        }, 1000
        )
    }
    if(event.keyCode == 40){
        char1.src = "Assests/gifs/char1 down.gif"
            char1.style.height= "300px"

    setTimeout(()=>{
            char1.src = "Assests/gifs/leona standing.gif"
            char1.style.height= "220px"

        }, 2000
        )
    }

}

function character(event){
    if(event.keyCode == 74 && right > 40){
        right = right-10
        char2.style.left = right + "px"
        char2.src = "Assests/gifs/character 2 running.gif"
        setTimeout(()=>{
            char2.src = "Assests/gifs/char2 standingfunny.gif"
            setTimeout(()=>{
            char2.src = "Assests/gifs/character 2.gif"
        },1000 )
        },2000 )
        
    }

    if(event.keyCode == 76 && right < 1120){
        right = right + 10
        char2.style.left = right + "px"
        char2.src = "Assests/gifs/character 2 running.gif"
        char2.style.transform = "scaleX(1)"

        setTimeout(()=>{
            char2.src = "Assests/gifs/char2 standingfunny.gif"
            setTimeout(()=>{
            char2.src = "Assests/gifs/character 2.gif"
            char2.style.transform = "scaleX(-1)"

        },1000 )
        },2000 )
    }

    if(event.keyCode == 32){
        char2.src = "Assests/gifs/char2 fighting.gif"
        setTimeout(()=>{
            char2.src = "Assests/gifs/character 2.gif"
        },1000 )
    }
    if(event.keyCode == 77){
        char2.src = "Assests/gifs/char2 down.gif"
            char2.style.height= "150px"

    setTimeout(()=>{
            char2.src = "Assests/gifs/character 2.gif"
            char2.style.height= "220px"

        }, 1000
        )
    }
    if(event.keyCode == 73){
        char2.src = "Assests/gifs/char2 up.gif"
            char2.style.height= "1000px"

    setTimeout(()=>{
            char2.src = "Assests/gifs/character 2.gif"
            char2.style.height= "220px"

        }, 1400
        )
    }
    
}


    

window.onkeydown = animation
document.onkeydown = character