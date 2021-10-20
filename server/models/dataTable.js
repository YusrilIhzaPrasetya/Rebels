const mongoose = require("mongoose")

const dataTableSchema = mongoose.Schema({
    topik : {
        type : String,
        required : true
    },
    nominal : {
        type : Number,
        required : true
    },
    tanggal : {
        type : Date,
        required : true
    },
    foto : {
        type : String,
        // required : true
    },
    keterangan : {
        type : String,
        required : true
    },
    tipedata : {
        type : String,
        required : true
    },userId: {
        type : mongoose.Schema.Types.ObjectId,
        require: true
    }
},{
    versionKey: false ,
    collection:"dataTable"
})

const dataTablemodel = mongoose.model("DataTable",dataTableSchema)

module.exports = dataTablemodel