import axios from "axios"
import { store } from "../../redux/store/store";
import { addUser } from "../../redux/slice/userSlice";



const api = axios.create({
    baseURL : "http://localhost:3000/",
    timeout : 10000,
    withCredentials : true
});

    api.interceptors.response.use(
        (response)=>{
          if(response?.data?.auth == "true"){
            store.dispatch(addUser(response.data.user));
          }
          return response
        },

        async (error)=>{
          if(error.response && error.response.data.errorType == "accessExpire"){
            
              try {
                const response =  await api.get("/refresh-access")  
                console.log("refresh token Checked")
              } catch (error) {
                if(error.response && error.response.data.errorType == "refreshToken"){
                  window.location.href = "/login?reason=sessionExpired";
                }
              }
          }

          return Promise.reject(error)
        }
      );


export default api;