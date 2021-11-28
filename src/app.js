if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

const theatersRouter = require('./theaters/theaters.router');


const app = express();

app.use(cors());

app.use("/theaters", theatersRouter)

module.exports = app;
