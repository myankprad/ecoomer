import express from "express"
import dotenv from "dotenv"
const app = express()
import Router from "./routes/route.js"
import DefaultData from "./default.js"
import cors from "cors";
import bodyParser from "body-parser"

import {Connection}  from "./database/db.js";
dotenv.config()

app.use("/", Router)
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const PORT = 8000;
Connection(USERNAME, PASSWORD)
app.listen(PORT, ()=> console.log("server is running"))
DefaultData();