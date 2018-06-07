// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var socket=require('socket.io')


app.use(express.static('public'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



var server = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + server.address().port);
});

var io=socket(server);

io.on('connecting',function(socket){

console.log(socket.id)

})