import mongoose from "mongoose"



export const connectToDb=()=>{
  mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to Db")
  }).catch((err)=>{
    console.log(err)
    console.log("Disconnected to Db",err);
  })

}