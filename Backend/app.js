const express = require("express");
import cookieParser from "cookie-parser";

const app = express()
app.use(json())
app.use(urlencoded({extended: true}))
app.use(cookieParser())

export default app;