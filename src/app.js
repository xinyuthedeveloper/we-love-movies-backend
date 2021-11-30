if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

const theatersRouter = require('./theaters/theaters.router');
const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/NotFound");


const app = express();

app.use(cors());

app.use("/theaters", theatersRouter);
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);

app.use(notFound)
app.use(errorHandler)

module.exports = app;
