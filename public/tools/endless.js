const ENDLESS_INTERVAL = 250;

var prev_end_offset = 9999;
var endless_enabled = false;

//add the endless button
$("<i/>", {
	id:"endless",
	class:"fa fa-angle-double-down",
	title:"Endless",
	style:"opacity:0.5",
	click: function(){
		//toggle button when clicked
		$(page).focus();

		endless_enabled = !endless_enabled;

		if(endless_enabled)	$(this).css('opacity', '1');
		else $(this).css('opacity', '0.5');
	}
}).appendTo(toolbar);

//if backspace was pressed, ignore it
keyListeners.push(function(e){
  if(!endless_enabled) return;

	if(e.keyCode === 8)
		e.preventDefault();
});

//try to push the cursor to the document end every few ms
setInterval(function(){
  if(!endless_enabled) return;

  var elem = $(page).get(0).firstChild;

	if(!elem) return;

	var selection = window.getSelection();
  var range = selection.getRangeAt(0);

  var nrange = document.createRange();
  nrange.selectNodeContents(elem);
  nrange.collapse(false);

  nrange.setStart(elem, elem.length-1);

  if(range.compareBoundaryPoints(Range.START_TO_START, nrange) === -1 ||
		range.compareBoundaryPoints(Range.END_TO_END, nrange) === -1){
    range.selectNodeContents(elem);
    range.collapse(false);
    prev_end_offset = range.endOffset;
  }

  nrange.detach();

  selection.removeAllRanges();
  selection.addRange(range);
}, ENDLESS_INTERVAL);
