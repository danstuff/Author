//when this script loads, fill the page with what the server sends you
$(page).load("/novel_data.txt", function(response, status){
	if(status === "success")
		console.log("Connected, downloaded novel data");
	else
		console.log("ERROR: Counld not connect to server");
})
