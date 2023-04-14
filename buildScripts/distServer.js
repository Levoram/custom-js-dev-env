import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import open from "open";
import compression from "compression";
//import favicon from "serve-favicon";

/* eslint-disable no-console */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Port to listen on
const port = 3000;
const app = express();

app.use(express.static("dist"));
app.use(compression());

//Serving static files from filesystem on root
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "dist", "index.html"));
});

//  Serve a static directory
app.use(express.static(path.join(__dirname, "../", "dist", "images")));
//app.use(favicon(path.join(__dirname, "../", "dist", "images", "favicon.ico")));

//Creating a simple user inmemory userdb.json for testing.
app.get("/users", function (req, res) {
  res.json([
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
    },
    {
      id: "2",
      firstName: "Frank",
      lastName: "Miller",
      email: "frank.miller@gmail.com",
    },
    {
      id: "3",
      firstName: "Henry",
      lastName: "Harper",
      email: "henry.harper@webmail.com",
    },
    {
      id: "4",
      firstName: "Austin",
      lastName: "Texas",
      email: "austin.texas@hotmail.com",
    },
  ]);
});

//Start listening for requests
app.listen(port, function (err) {
  if (err) {
    //Log err to console
    console.log(err);
  } else {
    //open bowser automatically to the right port
    open("http://localhost:" + port);
  }
});
