$(document).ready(function() {
  $("#typing").attr("contenteditable","true");
  $("#typing").focus();

  //set to trigger every half second
  setInterval(function(){
    //trigger word count update
    updateWordCount();

    //trigger hemingway mode update
    updateHemingway();

    //TODO autosave
    //saveTyping();
  }, 500);

  //set to trigger every time a key is pressed
  $("#typing").keypress(function(e){
    //if backspace was pressed and hemingway is on, ignore backspace
    if(e.keyCode == 8 && hemingway){
      e.preventDefault();
    }
    //insert 5 spaces when the tab key is pressed
    else if(e.keyCode == 9){
      e.preventDefault();
      document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  });
})
