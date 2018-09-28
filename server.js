var fs = require("fs");
var host = "0.0.0.0";
var port = process.env.PORT || 3001;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
  response.send("In production!!");
});

app.listen(port, host);
