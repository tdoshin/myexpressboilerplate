//grab env variables

require("dotenv").config;
//import express

const express = require("express");

//import database connection

const mongoose = require("./db/connection");

//import merced logger

const { log } = require("mercedlogger");

//import middleware

const methodOverride = require("method-override");
const morgan = require("morgan");
const cors = require("cors");

//PORT variable

const PORT = process.env.PORT || "2021";

//////////////////////////////

//Create APP Object

const app = express();

//set view engine

app.set("view engine", "ejs");

///////////////////////////////

//Set middleware

app.use(cors()); //prevent cors errors
app.use(methodOverride("_method")); //swap methods for delete/put requests

app.use(express.static("public")); // serve public folder as static

app.use(morgan("tiny")); // request logging

app.use(express.json()); //parse json bodies

app.use(express.urlencoded({ extended: false }));

////////////////////////////////

//Routes and Routers

//test routes
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

//App listener
app.listen(PORT, () =>
  log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`)
);
