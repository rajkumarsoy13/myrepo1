var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

/*var express = require("express");
var socket = require("socket.io");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'node'
});
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/api1", function (req ,res) {
	connection.query("SELECT * FROM user", function (err ,rows){
		
		res.send({
			message:rows
		});

	});
});

app.post("/api1", function (req ,res) {

	try {
		var name = req.body.name;
		console.log(req.body);
		connection.query("INSERT INTO user (name) VALUES (?) ",[name], function (err ,rows){
			if(err){
				throw err;
			}	else {
					res.send({
						message:rows
					});
				}
			
			
		});
	} catch(ex){
		console.log(ex);
	}

	
});

app.listen(port);
console.log("App starts on port:"+port);*/