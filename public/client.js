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
  var  output = document.getElementById('output');
    var ran=Math.round(Math.random()*1000000);
  var data1="Anonymus"+ran.toString()+"chas joined conversation";
  var namel="Anonymus"+ran.toString();
  if(socket){
  
    console.log(data1);
  socket.emit('enter',data1);
  }
  
  socket.on('chat1',function(data){
  console.log("hello mudda");
  output.innerHTML+="<p><em>"+data+"</em></p>";
  })
  
  
  message.addEventListener('keypress',function);
  
  
})()