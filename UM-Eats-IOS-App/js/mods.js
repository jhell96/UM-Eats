function unhide() {
	var elems = document.getElementsByClassName("special-mod");
	for (var i = 0; i < elems.length; i++) {
		elems[i].classList.remove("hidden-by-searchbar");
	}
}

function mapLoad() {
	document.getElementById("map").style.height = "100%";
}