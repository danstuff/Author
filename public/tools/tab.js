keyListeners.push(function(e){
	//insert 5 spaces when the tab key is pressed
	if(e.keyCode === 9){
		e.preventDefault();
		document.execCommand("insertHTML", false,
		 "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	}
});
