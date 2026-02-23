import { userModel } from "../model/userModel.js"
import { accessToken } from "../services/accessToken.js"
import { refreshToken } from "../services/refreshToken.js"
import verifyPassword from "../services/verifyPassword.js"

async function loginController(req,res){
    const {email , password} = req.body

    try{
        if(!email || !password){
            return res.status(400).json({message : "Input Not Found"})
        }

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(400).json({message : "User Not Found" , error : "user"})
        }

        const verify = await verifyPassword(password , user.password)

        if(!verify){
            return res.status(400).json({message : "Password is Incorrect"})
        }

        const access_Token = accessToken({userId : user._id })
        const refresh_Token = refreshToken({userId : user._id})

        res.cookie("refreshToken" , refresh_Token , {
            httpOnly : true,
            secure : false,
            maxAge :  24 * 60 * 60 * 1000
        })

        res.cookie("accessToken" , access_Token, {
            httpOnly : true,
            secure : false,
            maxAge : 10 * 60 * 1000
        })

        req.user = user

        res.status(200).json({message : "Login Succefully" , user})
    }catch(err){
        res.status(400).json({message : "Error during Login" , error : err.message})
    }
};

export default loginController;