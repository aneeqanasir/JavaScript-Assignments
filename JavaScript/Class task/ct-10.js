function getDetail(){
    var zip = document.getElementById("zipCode").value
    var city
    switch (zip) {
        case "74200":
            city = "Karachi"
            break;
        case "54000":
            city = "Lahore"
            break;
        case "44000":
            city = "Islamabad"
            break;

        default:
            city = "Invalid"
    }
    document.getElementById("cityName").value = city
}
function getZip(){
    var cities = document.getElementById("cityName").value
    var city
    switch (cities.toLowerCase()) {
        case "karachi":
            city = "74200"
            break;
        case "lahore":
            city = "74200"
            break;
        case "islamabad":
            city = "44000"
            break;
    
        default:
            city = "Invalid"
    }
    document.getElementById("zipCode").value = city
}

function lessPara(){
    var lessGraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur laboriosam id omnis earum nobis culpa odio tenetur dolores suscipit ea, ex aliquam sapiente accusamus labore ut amet dolorem unde eveniet ad corrupti, sequi iste totam et! Atque ex quam sed non iusto tempore accusantium fugit natus sit quae? Explicabo iure quasi earum, quo illo dicta quae optio laudantium accusantium unde doloremque quaerat assumenda magnam, veritatis odit modi nostrum quam minus magni. Fugiat tempora magnam quo, nihil quia corrupti modi voluptate placeat.'

    var fullGraph = " Odit ea animi cum incidunt assumenda pariatur exercitationem tempore sequi architecto. Ratione quo similique voluptates. Nulla ipsam veritatis quam quidem, quaerat eos dolore aut, suscipit recusandae aliquam blanditiis cum facilis tempore? Ipsum necessitatibus illo amet, illum nisi rerum quam eaque aperiam fugit! Temporibus velit ut laudantium esse adipisci tempore quod ducimus amet qui dolor, quis tempora consectetur nisi quaerat perspiciatis quia fuga dicta, sit rem incidunt? Sit reprehenderit quo dolores debitis dolore quasi nesciunt voluptates culpa? Dolorum, repellat quae voluptatem rerum molestias soluta! Ab expedita quos explicabo repudiandae nostrum corporis? Distinctio nemo itaque ipsum adipisci fugiat eius voluptates labore voluptas quae amet laboriosam veniam a molestiae quas tenetur non voluptate dolores quia numquam saepe, libero inventore corrupti provident illo. Enim repudiandae asperiores eum!"

    var link = document.getElementById("lessPara").innerHTML
    if (link ===  "See more"){
        document.getElementById("lessPara").innerHTML = fullGraph
        document.getElementById("link").innerHTML = "See less"

    }
}