import userModel from "../model/userSchema.js";

export async function verifiedFacility(req,res){
    try {
        const response = await userModel.find({verified : true})
        res.json({facility : response , message : "Succefuly Sent"})
    } 
    catch (error) {
        res.status(500).json({message : "Somethig Went Wrong" , error : error})
    }
}