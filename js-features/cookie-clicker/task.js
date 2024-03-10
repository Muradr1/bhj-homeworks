const text = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function(){
    let num = text.textContent ++;
    if (num % 2 === 0) {
        image.width = "400";
    } else {
        image.width = "200";
    }
}