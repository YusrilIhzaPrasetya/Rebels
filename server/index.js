"use strict"

require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({extended : true}))
app.use(express.json)
app.use(cors())

const URL = process.env.URL || "mongodb://localhost:27017/piggy"
mongoose.connect(URL).then(()=>{
    console.log("Success Connect To Database")
}).catch((err)=>{
    console.log("Cannot Connect To Server",err)
})

app.listen(port, ()=>{
    console.log("Server Berhasil Dijalankan")
})