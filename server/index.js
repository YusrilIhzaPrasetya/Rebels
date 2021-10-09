"use strict"

require("dotenv").config()
const port = process.env.PORT
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const app = express()
const mainRouter = require("./routers/mainRouter")
const handleError = require("./middlewares/handleError")

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

 const URL = process.env.URL || "mongodb://localhost:27017/piggy"
mongoose.connect(URL).then(()=>{
    console.log("Success Connect To Database")
}).catch((err)=>{
    console.log("Cannot Connect To Server",err)
}) 

app.use(mainRouter)
app.use(handleError)

app.listen(port, ()=>{
    console.log(`Server Berhasil Dijalankan di Port ${port}`)
})