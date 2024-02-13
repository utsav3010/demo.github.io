// create function for navbar button using content hide and show 

function display() {
    var x = document.getElementById("list")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
}