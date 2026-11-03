var span = document.getElementById("display")
var count = 0
function increment(amount){
    count = count+amount
    console.log(count);
    span.innerText=count
    
}
function decrement() {
    if (count > 0) {
        count = count - 1;
    }

    span.innerText = count;
}