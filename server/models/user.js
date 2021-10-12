const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    nama : {
        type : String,
        require : true,
        sourceKey: "_id"
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    role : {
        type : String,
        require : true
    }
},{
    collection:"user"
})

const model = mongoose.model("User",userSchema)

module.exports = model