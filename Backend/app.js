const express = require("express");
const cookieParser = require("cookie-parser");
const connectToDB = require("./config/database.config");

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

connectToDB();

module.exports = app;