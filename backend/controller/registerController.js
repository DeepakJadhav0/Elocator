import { Error } from "mongoose"
import { userModel } from "../model/userModel.js"
import hashPassword from "../services/hashPassword.js"

export async function registerController(req,res){

    try {
        const {email , password} = req.body
        const exists = await userModel.findOne({email})
        if(exists){
            return res.status(409).json({message : "User Already Exists"})
        }
        const hash_password = await hashPassword(password)
        const user = await userModel.create({
            ...req.body,
            password : hash_password
        })
        res.status(201).json({message : "User Created Succefully"})

    }catch(error) {
        console.log(error)
        res.status(500).json({message : "Error occured during Register", error : error.message})
    }
}