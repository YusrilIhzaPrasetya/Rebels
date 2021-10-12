const mongoose = require("mongoose")

const dataTableSchema = mongoose.Schema({
    topik : {
        type : String,
        require : true
    },
    nominal : {
        type : String,
        require : true
    },
    tanggal : {
        type : String,
        require : true
    },
    foto : {
        type : String,
        require : true
    },
    keterangan : {
        type : String,
        require : true
    },
    tipedata : {
        type : String,
        require : true
    },
},{
    versionKey: false ,
    collection:"dataTable"
})

const dataTablemodel = mongoose.model("DataTable",dataTableSchema)

module.exports = dataTablemodel