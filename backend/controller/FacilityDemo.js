import userModel from "../model/userSchema.js"

export async function facilityDemo(req,res){
    try{
        const data = await  userModel.find();
        res.json({facilities : data})
    }
    catch(error){
        res.status(500).json({message : "Somethig Went Wrong" , error : error})
    }
}