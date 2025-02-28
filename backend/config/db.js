import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('my-db-url').then(()=>console.log("DB Connected"));
   
}
