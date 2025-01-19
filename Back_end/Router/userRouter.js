const express = require('express')
const multer = require('multer')
const userModel = require('../models/UserModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'SAILING'

const router = express.Router()

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"profileUpload/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})

const upload = multer({storage})


router.post("/signup",upload.single("image"),async(req,res)=>{

const {uname,email,password} = req.body
const ImageUrl = `${req.file.filename}`

const isEmail= await userModel.findOne({email:email})


if(isEmail){

    return res.json({
        success:true,
        message:'Email Already Exists'
    })
}else{

    const hashPassword = await bcryptjs.hashSync(password,10)
   
    await userModel.create({
        userName:uname,
        email:email,
        image:ImageUrl,
        password:hashPassword
    })
    .then(user => {
        return res.json({
            success:true,
            message:'SignUp SuccessFully'
        })
    })
    .catch(err => {
        console.log("error while signup",err)
        return res.json({
            success:false,
            message:'SignUp Not SuccessFully '
        })
    })

}
    

})

router.post("/signin",async(req,res)=>{
   const {email,password} = req.body
   console.log(password)
   
 const user=  await userModel.findOne({email:email})
 console.log(user)

 if(user){
    const passwordResult = await bcryptjs.compareSync(password,user.password)
    console.log(passwordResult)

    if(passwordResult){

        const token = jwt.sign({
            id:user._id
        },SECRET_KEY)
        

        return res.json({
            success:true,
            message:'Login Successfully',
            token:token
        })



    }
    else{
        return res.json({
            success:false,
            message:'Email Or Password is Incorrect'
        })
    }
 }
 else{
    return res.json({
        success:false,
        message:'Email Or Password is Incorrect'
    })
 }
   


})


router.get("/getUser/:id",async (req,res)=>{
    const {id} = req.params
  

  
   await userModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.get("/allUser",async (req,res)=>{

    await userModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.delete("/deleteUser/:id",async(req,res)=>{

    const {id} = req.params
   
    await userModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

module.exports = router