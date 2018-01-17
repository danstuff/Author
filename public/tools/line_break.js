//add a line break button to the toolbar
$("<i/>", {
	id:"line_break",
	class:"fa fa-ellipsis-h",
	title:"Line Break",
	click: function(){
		$(page).focus();
		document.execCommand("insertHTML", false, "<br>---<br><br>");
	}
}).appendTo(toolbar);
