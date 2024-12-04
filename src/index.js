require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import mogoose from 'mongoose';
// import {DB_NAME} from "./constants"
import connectDB from "./db/index.js";
// import express from "express"
// const app=express()

connectDB().then(()=>                                                             //"=>{}" this is called "Call back" used for genrating output
app.listen(process.env,PORT || 8000, ()=>{                                      // process.env.PORT-- this is just a const from .env in which we have define the PORT which will collect and give output and input 
    console.log(`Server is running at port: ${process.env.PORT}`);
})).catch((error)=>{                                                            // .catch((erro)) this is solely used to find out if there is any error
    console.log('MONGO db connection failed!!!', error)
})




/*

(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on('error',(error)=>{
        console.log("errr", error);
       })

    }catch(erro){
        console.error("ERROR:", error)
        throw error
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on
         port${process.env.PORT}`);
})


*/

 

