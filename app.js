//module import
require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./router/user_route')
const connectDB = require('./db/connect')

//middleware
app.use(express.json())

//router
app.use('/',userRouter)


const port = process.env.PORT || 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`the server is listening to the port: ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}
start()
