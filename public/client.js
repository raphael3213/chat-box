// client-side js
// run by the browser each time your view template is loaded
  

(function(){
  console.log('hello world :o');
  
var socket=io.connect(process.env.PORT);
  
})()