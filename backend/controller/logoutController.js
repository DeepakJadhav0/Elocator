export function logoutController(req,res){
    try {

    res.clearCookie("refreshToken")
    res.clearCookie("accessToken")

    res.status(200).json({message : "Token Cleared"})
        
    } catch (error) {

    res.status(500).json({message : "Error on Logout"})
        
    }
}