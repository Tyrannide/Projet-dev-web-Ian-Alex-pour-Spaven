

function nav_opti() {
    var x = document.getElementById("navigation");
    if (x.className === "navbar") {
	x.className += " opti";
    } else {
	x.className = "nav";
    }
}
