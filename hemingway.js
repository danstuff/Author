var hemingway = true;
var prev_end_offset = 10;

function updateHemingway(){
  if(hemingway){
    var elem = document.getElementById("typing");

    var selection = window.getSelection();
    var range = selection.getRangeAt(0);

    var nrange = document.createRange();
    nrange.selectNodeContents(elem);
    nrange.collapse(false);

    nrange.setStart(elem, 1);

    if(range.compareBoundaryPoints(Range.START_TO_START, nrange) === -1){
      range.selectNodeContents(elem);
      range.collapse(false);
      prev_end_offset = range.endOffset;
    }

    //nrange.detach();

    selection.removeAllRanges();
    selection.addRange(nrange);
  }
}
