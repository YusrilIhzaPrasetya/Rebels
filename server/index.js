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
const bodyParser= require('body-parser')
const multer = require('multer');

app.use(express.static(__dirname + "/assets"))
app.use(bodyParser.urlencoded({extended: true}))
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

var storage = multer.diskStorage({
    destination :(req,res,cb)=>{
        cb(null,'uploads')
    },
    filename : ()=>{
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({storage, storage})


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/uploadfile', upload.single('myFile'),(req, res, next)=>{
    const file = req.file
    if (!file) {
        const error = new Error('Tolong Upload File Anda')
        error.httpsStatusCode = 400;
        return next(error)
    }

    res.send(file);
})

app.listen(port, ()=>{
    console.log(`Server Berhasil Dijalankan di Port ${port}`)
})
