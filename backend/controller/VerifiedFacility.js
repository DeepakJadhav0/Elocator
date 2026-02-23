import facilityModel from "../model/facilitySchema.js";

export async function verifiedFacility(req,res){
    try {
        const response = await facilityModel.find({verified : true})
        res.json({facility : response , message : "Succefuly Sent"})
    } 
    catch (error) {
        res.status(500).json({message : "Somethig Went Wrong" , error : error})
    }
}