require("dotenv").config()
const userModel = require ("../models/user")
const bcrypt = require ("bcryptjs")
const JWT = require("jsonwebtoken")

class userController {
    static registrasi = async (req,res,next) =>{
        try {
            const {nama,email,password} = req.body;
            // console.log(nama,email,password)
            const passwordHashing = bcrypt.hashSync(password,10)
            const data = {nama,email,password:passwordHashing,role:"user"}

            const user = await userModel.create(data)
            res.status(201).json({
                msg : "Data berhasil dibuat",
                user
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg : "Internal Server Error"
            })
        }
    }
    
    // static login = async(req,res,next)=>{
    //     try {
    //         const {email,password} = req.body;
    //         const user = await userModel.findOne({
    //             email : email
    //         })
            
    //         if(!user){
    //            return next(error);
    //         }

    //         if(!bcrypt.compareSync(password,user.password)){
    //             res.status(404).json({
    //                 msg : "Email atau password salah"
    //             })
    //         }

    //         const accessToken = JWT.sign({
    //             id : user._id,
    //             nama : user.nama,
    //             email : user.email
    //         },process.env.JWT_SECRET)

    //         res.status(200).json({
    //             msg:"email ada",
    //             token : accessToken
    //         })

    //     } catch (error) {
    //         next(error)
    //     }
    // }

        static login = async(req,res,next)=>{
        try {
            const {email,password} = req.body;
            const user = await userModel.findOne({
                email : email
            })
            
            if(!user){
               return next({code : 404, msg :"Not Found"});
            }

            if(!bcrypt.compareSync(password,user.password)){
                return next({code : 422, msg :"Invalid Email Password"})
            }

            if(!bcrypt.compareSync(password,user.password)){
                return next(error)
            }
            const accessToken = JWT.sign({
                id : user._id,
                nama : user.nama,
                email : user.email
            },process.env.JWT_SECRET)

            res.status(200).json({
                msg:"email ada",
                token : accessToken
            })

        } catch (error) {
            next({
                code : 500,
                msg: error.message
            })
        }
    }
}

module.exports = userController