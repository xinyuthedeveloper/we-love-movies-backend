if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

const theatersRouter = require('./theaters/theaters.router');
const moviesRouter = require("./movies/movies.router");

const errorHandler = require("./errors/errorHandler");


const app = express();

app.use(cors());

app.use("/theaters", theatersRouter);
app.use("/movies", moviesRouter);

app.use(errorHandler)

module.exports = app;
