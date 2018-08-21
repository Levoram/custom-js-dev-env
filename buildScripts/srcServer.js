"use strict";

let express = require('express');
let path = require('path');
let open = require('open');

let port = 3000;
let app = express();

//Serving files from filesystem
app.get('/', function (req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen (port, function(err){
if(err){
  //Log err to console
  console.log(err);
}else{
  //open bowser automatically to the right port
  open('http://localhost:'+port);
}
});


