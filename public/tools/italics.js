var italics_enabled = false;

//add an italics button to the toolbar
$("<i/>", {
	id:"italics",
	class:"fa fa-italic",
	title:"Italics",
	style:"opacity:0.5",
	click: function(){
		$(page).focus();
		document.execCommand("italic");
		italics_enabled = !italics_enabled;

		if(italics_enabled)	$("#italics").css('opacity', '1');
		else	$("#italics").css('opacity', '0.5');
	}
}).appendTo(toolbar);

//check if any elements in the selection are italicized
keyListeners.push(function (e) {
	var elem = $(page)[0].firstChild;
	if(!elem) return;

	var range = window.getSelection().getRangeAt(0);

	var start_name = range.startContainer.parentElement.localName;
	var end_name = range.endContainer.parentElement.localName;

	//modify the italics button's enabled
	if(start_name === "i" || start_name === "I" ||
		end_name === "i" || end_name === "I"){
		italics_enabled = true;
	}
	else {
		italics_enabled = false;
	}

	if(italics_enabled)	$("#italics").css('opacity', '1');
	else	$("#italics").css('opacity', '0.5');
});
