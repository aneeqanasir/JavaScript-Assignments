// function remove(e){
//     var rBtn = document.getElementById("removeBtn")
//     var row = e.parentNode.parentNode
//     row.remove()

// }

function addStudents(e){
    e.preventDefault()
    var nameValue = document.getElementById("studentName").value
    var ageValue = document.getElementById("studentAge").value
    console.log(nameValue , ageValue);
    var studentBodyValue = document.getElementById("studentBody")
   
studentBodyValue.innerHTML += `
<tr>
            <td >${nameValue}</td>
            <td >${ageValue}</td>
            <td>
            <button onclick = "deleteBtn(this)">Delete</button>
            <button>Edit</button>
            </td>
             
            
        </tr>

}
function deleteBtn(e){
    var activeRow = e.parentNode.parentNode
    activeRow.remove()
}