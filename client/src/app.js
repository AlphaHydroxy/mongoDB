// var Lipstick = require('');

var app = function(){
  var url = "http://localhost:3000/lipstick";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
 var request = new XMLHttpRequest();
 request.open("GET", url);
 request.addEventListener('load', callback);
 request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var macString = this.responseText;
  var mac = JSON.parse(macString);
}


window.addEventListener('load', app);