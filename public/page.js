//initialize global attributes
const page = "#page";
const toolbar = "#toolbar";
const counter = "#counter";
const server = "http://localhost:3333";

var keyListeners = [];

$(document).ready(function(){
	//enable the page entry field
	$(page).attr("contenteditable","true");
	$(page).focus();

	//trigger listening functions every time a key is pressed in page
	$(page).keypress(function(e){
		for(var i = 0; i < keyListeners.length; i++){
			keyListeners[i](e);
		}
	});
});
