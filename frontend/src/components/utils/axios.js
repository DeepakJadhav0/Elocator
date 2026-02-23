import axios from "axios"

axios.interceptors.request.use(
    (config)=>{
        console.log("response is sent",config)
        return config
    },
    (error)=>{
        return error
    }
);