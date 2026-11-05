function hideImg(e){
//                                           -------- step 1

    // e.style.display = "none"
//                                          --------- step 2

    // var image = document.getElementById("hideImg")
    // image.style.height = " 200px"
                                           // --------- step 3
//
    var image = document.getElementById("hideImg")
    image.className += "hideImg" 
}

function changeImg(id , url){
    var image = document.getElementById(id).src = url
}

function link(){
    var link = document.getElementById("link")
    var Link = link.href
    console.log(Link);
}