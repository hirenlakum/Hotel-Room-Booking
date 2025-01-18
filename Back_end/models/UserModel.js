const Mongoose = require('mongoose')

const userSchema=new Mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    bookedRooms:[{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'rooms'
    }]

})

const userModel = Mongoose.model("userData",userSchema)

module.exports=userModel