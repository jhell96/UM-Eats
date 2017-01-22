function unhide() {
	var elems = document.getElementsByClassName("special-mod");
	for (var i = 0; i < elems.length; i++) {
		elems[i].classList.remove("hidden-by-searchbar");
	}
}

function mapLoad() {
	document.getElementById("map").style.height = "100%";
}

function loadSugPage(ele) {
    var link = ele.getAttribute("data-url");
    console.log(link);
    var iframe = '<iframe width="100%" height="800" src="'+link+'" frameborder="0" embedded="true"></iframe>';
    
    $('#pop-preloader-sug').show();
	$('#popup-embed-sug').hide();
    $('#popup-embed-sug').html(iframe);
	    
    setTimeout(function() {
	    $('#pop-preloader-sug').hide();
    	$('#popup-embed-sug').show();
	}, 500);
} 

// function loadMenuPage(ele) {
//     var link = ele.getAttribute("data-url");
//     console.log(link);
//     var iframe = '<iframe width="100%" height="800" src="'+link+'" frameborder="0" embedded="true"></iframe>';

//     if (link.indexOf(".pdf") !== -1) {
//     	PDFObject.embed(link, "#popup-embed-menu");
//     }
    
//     $('#pop-preloader-menu').show();
// 	$('#popup-embed-menu').hide();
//     $('#popup-embed-menu').html(iframe);
	    
//     setTimeout(function() {
// 	    $('#pop-preloader-menu').hide();
//     	$('#popup-embed-menu').show();
// 	}, 500);
// }