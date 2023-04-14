import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import favicon from "serve-favicon";
import open from "open";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../webpack.config.dev.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Port to listen on
const port = 3000;
const app = express();

//Webpack configuration
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
});

app.use(middleware);

//  Serve a static directory
app.use(express.static(path.join(__dirname, "../", "src", "public")));
app.use(
  favicon(path.join(__dirname, "../", "src", "public", "images", "favicon.ico"))
);

//Serving static files from filesystem on root
app.get("/", function (req, res) {
  res.sendFile(path.join("../src/index.html"));
});

//Creating a simple user inmemory userdb.json. This part is faking production datasource.
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
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    //open bowser automatically to the right port
    open("http://localhost:" + port);
  }
});
