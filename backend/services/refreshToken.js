import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export function refreshToken(data){
    try {

        const token = jwt.sign(data , process.env.REFRESHTOKEN , {
        expiresIn : "7d"
    })
    
        return token
        
    } catch (error) {
        console.log(error)
        throw new Error("Error during Refresh Token")
    }
};