function unhide() {
	var elems = document.getElementsByClassName("special-mod");
	for (var i = 0; i < elems.length; i++) {
		elems[i].classList.remove("hidden-by-searchbar");
	}
}

function mapLoad() {
	$('#initButton').click();
	document.getElementById("map").style.height = "100%";
}

function loadSugPage(ele) {
    var link = ele.getAttribute("data-url");
   
 //    if (cordova.platformId == "android") {
	//     var iframe = '<iframe width="100%" height="800px" src="'+link+'" frameborder="0" embedded="true"></iframe>';

	//     $('#pop-preloader-sug').show();
	// 	$('#popup-embed-sug').hide();
	//     $('#popup-embed-sug').html(iframe);
		    
	//     setTimeout(function() {
	// 	    $('#pop-preloader-sug').hide();
	//     	$('#popup-embed-sug').show();
	// 	}, 500);
	// }

	// if (cordova.platformId == "ios") {
		$(".open-popup").removeClass("open-popup");
		$(".popup").remove();

		cordova.InAppBrowser.open(link, '_blank', 'location=no,EnableViewPortScale=yes');
	// }

} 

function removeSearchHide() {
	$('.removeSearchHideClass').removeClass("hidden-by-searchbar");
}

function loadMenuPage(ele) {
	var link = ele.getAttribute("data-url");
    
 //    if (cordova.platformId == "android") {
	// 	cordova.InAppBrowser.open(link, '_system', 'location=no');
	// }

	// if (cordova.platformId == "ios") {
		cordova.InAppBrowser.open(link, '_blank', 'location=no,EnableViewPortScale=yes');
	// }
}

function loadPrepPage(ele) {
	var link = ele.getAttribute("data-url");
    
 //    if (cordova.platformId == "android") {
	// 	cordova.InAppBrowser.open(link, '_system', 'location=no');
	// }

	// if (cordova.platformId == "ios") {
		cordova.InAppBrowser.open(link, '_blank', 'location=no,EnableViewPortScale=yes');
	// }
}

function loadInfoPage(ele) {
	var link = ele.getAttribute("data-url");
    
 //    if (cordova.platformId == "android") {
	// 	cordova.InAppBrowser.open(link, '_system', 'location=no');
	// }

	// if (cordova.platformId == "ios") {
		cordova.InAppBrowser.open(link, '_blank', 'location=no,EnableViewPortScale=yes');
	// }
}

function callTellNumber(ele) {
	var number = ele.getAttribute("data-tel");
	cordova.InAppBrowser.open("tel:" + number, '_system');
}

function openInMaps(ele) {
	var latLng = ele.getAttribute("data-latLng");
	var restName = ele.getAttribute("data-rest");

	// if (cordova.platformId == "android") {
	// 	var navTo = "geo:" + latLng.substring(1, latLng.length - 1) + "?q=" + restName.replace(' ','+');
	// 	console.log(navTo);
	// 	cordova.InAppBrowser.open(navTo, '_system');
	// }

	// if (cordova.platformId == "ios") {
		var navTo = "http://maps.google.com/maps/search/"+restName.replace(' ','+')+"/@"+latLng.substring(1, latLng.length - 1)+",18z";
		console.log(navTo);
		cordova.InAppBrowser.open(navTo, '_system', 'location=no,EnableViewPortScale=yes');
	// }


}
