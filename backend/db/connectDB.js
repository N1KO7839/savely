import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export async function connectDB() {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected:", conn.connection.host)
    }
    catch(err){
        console.log(err)
        console.log("Error connection to:", err.message)
        process.exit(1)
    }
}
