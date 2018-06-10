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
console.log("hello")
var io=socket(server);

io.on('connection',function(socket){

  socket.on('enter',function(data){
  console.log("in serber")
  socket.broadcast.emit('chat1',data);
  
  })
  
  socket.on('typing',function(data){
  
  socket.broadcast.emit('typer',data);
  });
  
  socket.on('message',function(data){
  
  io.sockets.emit('messager',data);
  
  })
console.log(socket.id)

})