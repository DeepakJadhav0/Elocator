import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { accessToken } from "../services/accessToken.js"

dotenv.config()

export function refreshtoken(req,res){
    try {

    const refreshToken = req.cookies.refreshToken

    if(!refreshToken){
        return res.status(401).json({message : "Refresh  Not Found" , errorType : "refreshToken" })
    }

    const decode = jwt.verify(refreshToken , process.env.REFRESHTOKEN)
    
    if(!decode){
        return res.status(401).json({message : "Refresh Token Invalid" , errorType : "refreshToken"})
    }

    const access_Token = accessToken({userId : decode.userId})

    res.cookie("accessToken" ,access_Token ,{
        httpOnly : true,
        secure : false,
        maxAge : 10 * 60 * 1000
    })

    res.status(200).json({message : "accessToken created"})
        
    } catch (error) {

    res.status(500).json({message : "Error in access-refresh"})
        
    }
}