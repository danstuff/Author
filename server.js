var path = require("path");
var fs = require("fs");
var express = require("express");

var app = express();

var port = "3000";
var address = "localhost";

var filepath = "public/novel_data.txt";

function log(str, a){
	var ts = new Date().toTimeString().split(" ")[0];
	console.log(ts +" "+ str, a);
}

//set up the encoding express uses
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//serve static files automatically
app.use(express.static(path.join(__dirname, "public")));

//routing for home page
app.get('*', function(request, response){
	response.sendFile("author.htm", { root: __dirname + "/public/"});
	log("New client connected: %s", request.connection.remoteAddress);
});

//routing for saving
app.post('/save', function(request, response){
	fs.writeFile(filepath, request.body.html,
	 function(error){
		 if(error)	log(error);
		 else	log("Data written to %s", filepath);
	 })
});

//initialize the app
var server = app.listen(port, address, function(){
	var adr = server.address();
	log("Server started on %s", adr.address+":"+adr.port);
});
