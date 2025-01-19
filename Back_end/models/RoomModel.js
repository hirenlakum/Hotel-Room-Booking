const mongoose = require('mongoose')

const roomSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
    },
    availability:{
        type:Boolean,
        default:true
    },
    badType:{
        type:String,
        require:true
    },
    people:{
        type:Number,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    bookedDate:[
        {
            checkinDate:Date,
            checkoutDate:Date,
            userId:String
        }
    ],
   
  
})

const RoomModel=mongoose.model('rooms',roomSchema)

module.exports=RoomModel