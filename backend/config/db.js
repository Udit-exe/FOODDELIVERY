import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://iamuditagrawal:10691069@cluster0.74an9.mongodb.net/food-del').then(()=>console.log("db connected"));
}