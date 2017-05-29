var express = require("express");
var app = express();
var requestUrl = require("./routes");

app.use("/files",express.static("public"));

app.set("template engine","pug");

app.get("/",function(request,response){
	response.render("index.pug");
});

app.use("/profile",requestUrl);
app.listen(8080);