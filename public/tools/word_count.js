const WORDS_PER_PAGE = 250;

keyListeners.push(function(e){
  var text = $(page).text();
  var words = text.split(" ");

  var word_count = words.length.toString();
  var page_count = Math.round((words.length/WORDS_PER_PAGE)+1).toString();

  var word_text = (word_count === "1") ? " Word " : " Words";
  var page_text = (page_count === "1") ? " Page " : " Pages";

  $(counter).text(word_count + word_text + " | " + page_count + page_text);
});
