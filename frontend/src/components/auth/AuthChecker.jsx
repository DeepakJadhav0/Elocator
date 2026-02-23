import { Navigate } from "react-router-dom"

export default function AuthChecker({children}) {

    const accessToken = localStorage.getItem("accessToken")

    if(!accessToken){
        return <Navigate to={"/login"}  state={{ message: "Login first" }}/>
    }

    return children
}
