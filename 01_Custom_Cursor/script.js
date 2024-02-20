var maindiv = document.querySelector("#maindiv");
var cursor = document.querySelector("#customcur");
maindiv.addEventListener("mousemove", function (details) {
    cursor.style.left = details.x + "px"
    cursor.style.top = details.y + "px"
})