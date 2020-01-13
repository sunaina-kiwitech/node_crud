var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/user_routes')

var app = new express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/node_crud_db").then(()=>{
	console.log("connected to mongo sucessfully.")
}).catch((err)=>{
	console.log("Error in connection to mongo.", err)
})

app.use("/api", routes)

app.listen(3000, function(err, res){
	if(err){
		console.log("error in conection.", err)
	}else{
		console.log("server listening..")
	}
})
