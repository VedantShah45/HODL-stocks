import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const dbConnect=async()=>{
    await mongoose.connect(process.env.mongoURI)
}
