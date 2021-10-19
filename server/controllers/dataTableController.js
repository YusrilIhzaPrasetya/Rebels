require("dotenv").config()
 const dataTableModel = require('../models/dataTable');
 const multer = require ('multer')

const storage = multer.diskStorage({
    destination: (req,file , callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req,file, callback) => {
        callback(null, file.originalname)
    }
})
const upload = multer({storage:storage})  

 class dataTableController {

     static getAll = async (req,res,next)=>{
         try {
            const currentUser = req.currentUser
            
             const datatable = await dataTableModel.find({userId: currentUser._id}).sort("-tanggal").transform((data)=>{
                 
                return data.map((item)=>{
                    return {
                        _id : item._id,
                        topik: item.topik,
                        nominal: item.nominal,
                        tanggal: (item.tanggal)?item.tanggal.toLocaleDateString() : item.tanggal ,
                        foto: item.foto,
                        keterangan: item.keterangan,
                        tipedata: item.tipedata,
                        
                    } 

                })
             });
             res.status(200).json({
                 message : "success",
                 datatable,
                 currentUser
             })
         } catch (error) {
             next(error)
         }
     }

     static createDataTable = async (req,res,next)=>{
         try {
             const currentUser = req.currentUser

             const { topik,nominal,tanggal,foto,keterangan,tipedata} = req.body;
            console.log(currentUser._id)
            
            
             const newDataTable = {
                 topik : topik ,
                 nominal : nominal, 
                 tanggal : tanggal, 
                 foto  : foto, 
                 keterangan : keterangan,
                 tipedata : tipedata,
                 userId: currentUser._id
             }
    
             
             const newData = await dataTableModel.create(newDataTable)
             
             res.status(201).json({
                 message : "New Data has beed added",
                 newData
             })
         } catch (error) {
             next({
                 code : 500,
                 msg : error.message
             })
         }
        }

     static getDetail = async (req,res,next)=>{
         try {
             const {dataTableId} = req.params
             const datatable = await dataTableModel.findById(dataTableId)
             if(!datatable){
                 res.status(404).json({
                     message: "Data not Found"
                 })
             }
             res.status(200).json(datatable)
         } catch (error) {
             next(error)
         }
     }
     static updateDataTable = async (req,res,next)=>{
         try {
             const { dataTableId } = req.params;
             const datatable = await dataTableModel.findById(dataTableId)
             if(!datatable){
                 res.status(404).json({
                     message:"Data Not Found"
                 })
             }
             Object.assign(datatable, req.body);
             await datatable.save()
             res.status(200).json({
                 message:"Update Succesfull",
                 datatable
             })

         } catch (error) {
             next(error)
         }
     }
     static removeDataTable = async (req,res,next)=>{
         try {
             const {dataTableId} = req.params 
             const datatable = await dataTableModel.findById(dataTableId)
             if(!datatable){
                 res.status(404).json({
                     message: "Data has been deleted"
                 })
             }
             await datatable.remove();
             res.status(200).json({
                 message: "Data Delete Successs"
             })
         } catch (error) {
             next(error)
         }
     }
 }
 module.exports = dataTableController