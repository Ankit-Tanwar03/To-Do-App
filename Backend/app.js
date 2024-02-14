const express = require("express");
import cookieParser from "cookie-parser";
import connectToDB from "./config/database.config";

const app = express()
app.use(json())
app.use(urlencoded({extended: true}))
app.use(cookieParser())

connectToDB();

export default app;