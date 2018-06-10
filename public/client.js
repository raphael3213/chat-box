// client-side js
// run by the browser each time your view template is loaded
  /* global io */

(function(){
  console.log('hello world :o');
  
var socket=io('https://skitter-place.glitch.me/');
  console.log("hello"+socket)
  var name=document.getElementById('namer');
  var message=document.getElementById('message');
  var sndbut=document.getElementById('send');
  
  if(socket){
    var ran=Math.round(Math.random()*1000000);
  var data="Anonymus"+ran.toString()+"has joined conversation";
    console.log(data);
  socket.emit('enter',data);
  }
  
  socket.on('chat1',function(data){
  console.log("hello mudda");
  message.innerHTML+="<p>"+data+"</p>";
  })
  
  
})()