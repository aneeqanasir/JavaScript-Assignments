
var form = document.getElementById("myForm");
var formContainer = document.getElementById("formContainer");
var cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", 
    
    function(e) {
    e.preventDefault();

    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userAge = document.getElementById("age").value;

    formContainer.style.display = "none";

    cardContainer.style.display = "block";

    cardContainer.innerHTML = `
        <h2>${userName}</h2>
        <p>Email: ${userEmail}</p>
        <p>Age: ${userAge}</p>
    `;

});
