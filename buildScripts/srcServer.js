import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

//Port to listen on
const port = 3000;
const app = express();

//Webpack configuration
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//Serving static files from filesystem on root
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//Creating a simple user inmemory userdb.json for testing.
app.get('/users', function(req, res){
  res.json([
    {"id":"1", "firstName":"John", "lastName":"Doe", "email":"john.doe@gmail.com"},
    {"id":"2", "firstName":"Frank", "lastName":"Miller", "email":"frank.miller@gmail.com"},
    {"id":"3", "firstName":"Henry", "lastName":"Harper", "email":"henry.harper@webmail.com"},
    {"id":"4", "firstName":"Austin", "lastName":"Texas", "email":"austin.texas@hotmail.com"}
  ]);
});

//Start listening for requests
app.listen(port, function (err) {
  if (err) {
    //Log err to console
    console.log(err);
  } else {
    //open bowser automatically to the right port
    open('http://localhost:' + port);
  }
});
