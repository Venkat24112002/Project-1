const express = require('express')
const  mongoose  = require('mongoose')
const app = express()
PORT = 5000

//connectin mongoDB to backend

mongoose.set("strictQuery",false)


const connectDB = async() => {
  try{
    const conn = await mongoose.connect(
        'mongodb+srv://venkat2411:00000000@cluster0.ypkqrqh.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log("connected");
  }
  catch(error)
  {
    console(error)
  }
}


connectDB();

app.get('/',(req,res)=>{
    res.send("This is index hbhbnkk ")
})

app.listen(PORT,()=>console.log(`Server Runnin on port:http://localhost:${PORT}`))