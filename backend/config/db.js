import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/efacility")
        .then(()=>{
            console.log("MongoDB Connected")
        })
        .catch((error)=>{
            console.log("Cant Connect Database",error)
        })
