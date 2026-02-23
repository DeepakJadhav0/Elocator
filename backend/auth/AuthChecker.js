import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { userModel } from "../model/userModel.js"

dotenv.config()

export async function authChecker(req,res,next){

     try {
     
          const token = req.cookies.accessToken

          if(!token){
               return res.status(401).json({message : "Access Token Not Found" , error : "access_Token_Expired", errorType : "accessExpire" })
          }
          const decoded = jwt.verify(token , process.env.ACCESSSECRETKEY

          )
          if(!decoded){
               return res.status(400).json({message : "Incorrect Access Token" , error : "Inncorrect Access Token" ,errorType : "accessExpire" })
          }
          console.log(decoded)
          const user = await userModel.findById(decoded.userId);
          if (!user) {
               return res.status(401).json({ message: "User not found", error: "invalid_token_user"});
          }
          req.user = user
          next()
          
     } catch (error) {
          console.log(error)
          res.status(500).json({error : "authChecker" , message : "Error during Auth Checker"})
     }

};