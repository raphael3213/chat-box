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


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

