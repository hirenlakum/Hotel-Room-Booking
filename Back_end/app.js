const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(cors())
app.use(express.json())
const connection = require('./Dbconnection/connection')
const userRouter = require('./Router/userRouter') 
app.use(userRouter)
const RoomModel = require('./models/RoomModel')
const userModel = require('./models/UserModel')
const RoomRouter = require('./Router/roomRouter')
app.use(RoomRouter)
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use("/profileUpload",express.static(path.join(__dirname,"profileUpload")))


const port = 3011

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
    
