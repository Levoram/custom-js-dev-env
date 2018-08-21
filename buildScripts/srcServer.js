import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.use(require('webpack-dev-middleware')(compiler,{
noInfo:true,
publicPath: config.output.publicPath
}));

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


