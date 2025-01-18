const express = require('express')
const RoomModel = require('../models/RoomModel')
const UserModel = require('../models/UserModel')
const multer = require('multer')


const router=express.Router()

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage})


router.post("/addRoom",upload.single('image'),async(req,res)=>{

    
    if(!req.file){
        return res.json('no file uploaded')
    }

const {badtype,price,people} = req.body
const imageUrl = `${req.file.filename}`

await RoomModel.create({
    image:imageUrl,
    price:price,
    badType:badtype,
    people:people
})
.then(user => {
    return res.json({
        success:true,
        message:'Room added'
    })
})
.catch(err => {
    return res.json({
        success:false,
        message:'something went wrong'
    })
})

    

})


router.get("/getrooms",async(req,res)=>{
  

    await RoomModel.find()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.delete("/roomdelete/:id",async (req,res)=>{

    const {id} = req.params
   
    await RoomModel.findByIdAndDelete({_id:id})
    .then(user => {
        return res.json({
            success:true,
            message:'Room Delete'
        })
    })
    .catch(err => {
        return res.json({
            success:true,
            message:'Room Not Delete'

        })
    })
})

router.get("/getEachRoom/:id",async (req,res)=>{
    const {id} = req.params


    await RoomModel.findById({_id:id})

    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json({
            success:false,
            message:`Somethig went wrong while fetching data from the server ${err}`,
        })
    })
    

})

router.post("/updateRooms/:id",upload.single("image"),async(req,res)=>{
    const {id} = req.params




  const imageUrl = `${req.file.filename}`
 

  await RoomModel.findByIdAndUpdate(
{
    _id:id
  },
{
  image:imageUrl,
  price:req.body.price,
  badType:req.body.badtype,
  people:req.body.people
})
.then(user => {
    return res.json({
        success:true,
        message:'Room Update Successfully'
    })
})
.catch(err => {
    return res.json({
        success:false,
        message:'somethig went wrong while updating room data',err
    })
})


    
   
})


router.post("/bookroom", async(req,res)=>{
    const {id,userId,checkinDate,checkoutDate} = req.body
   


 const room=await RoomModel.findById({_id:id})

 if(!room.availability){
    return res.json({
        success:false,
        message:'room is not available'
    })
 }

 else
 {

    room.availability=false
    room.checkinDate=checkinDate
    room.checkoutDate=checkoutDate
    await room.save()
    const updatedUser = UserModel.findByIdAndUpdate({_id:userId},

        {
            $push:{bookedRooms:id}
        },
        {
            new:true,
            upsert:true
        }
    )
    .then(user => {
        return res.json({
            success:true,
            message:'Room Booked Successfully',
            userData:updatedUser
        })
    })
    .catch(err => {
        return res.json({
            success:true,
            message:'error while book room'
        })
    })
 }

 



})

router.get("/bookroomdata/:id",async(req,res)=>{

    try {
        const {id} = req.params
      

       const userData=  await UserModel.findById({_id:id}).populate("bookedRooms")
         .then(user => {
            
           
            res.json(user)
         })

       
    } catch (error) {
        console.log("error while fetching userData",error)
    }
   



})

module.exports=router