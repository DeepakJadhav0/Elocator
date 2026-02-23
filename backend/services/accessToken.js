import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export function accessToken(data){
    const token = jwt.sign(data , process.env.ACCESSSECRETKEY,{
        expiresIn : "10m"
    })

    return token
};