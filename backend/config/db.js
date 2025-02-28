import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://mdzakihussain:foodX@cluster0.dwi1bvx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
