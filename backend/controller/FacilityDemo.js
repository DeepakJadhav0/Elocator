import facilityModel from "../model/facilitySchema.js"

export async function facilityDemo(req,res){
    try{
        const data = await  facilityModel.find();
        const user = req.user
        res.json({facilities : data , auth : "true" , user })
    }
    catch(error){
        res.status(500).json({message : "Somethig Went Wrong" , error : error})
    }
}