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
 var feedback = document.getElementById('feedback');
  var rat=0;
  if(socket){
  
    console.log(data1);
  socket.emit('enter',data1);
  }
  
  socket.on('chat1',function(data){
  console.log("hello mudda");
  feedback.innerHTML+="<p><em>"+data+"</em></p>";
  })
  
  
  message.addEventListener('keypress',function()
                           {
    var handle=namel;
  if(name.value!=""){handle=name.value;}
  
    var da=handle+" is typing a message";
    socket.emit('typing',da);
  
  });
  
  socket.on('typer',function(data){
  
  feedback.innerHTML="<p><em>"+data+"</em></p>";
  rat=-1;
  })
  sndbut.addEventListener('click',function(){
    
    var handle=namel;
  if(name.value!=""){handle=name.value;}
    
  var datar={
    name:handle,
    mess:message.value
    }
  
  socket.emit('message',datar);
  
  })
  
})()