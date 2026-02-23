import { useEffect, useState } from "react"
import {useLocation, useNavigate, useSearchParams} from "react-router"
import toast , { Toaster} from "react-hot-toast"
import api from "../api/api"
import {useDispatch} from "react-redux"
import { addUser } from "../../redux/slice/userSlice"

export default function Login() {
    const [userInfo , setuserInfo] = useState({
      email : "",
      password : ""
    })

    const [search] = useSearchParams()

    useState(()=>{
    const reason = search.get("reason")
    if(reason == "sessionExpired"){
      toast.error("Please Login")
    }

    },[])
    const nevigate = useNavigate()
    const dispatch = useDispatch()

    const [showPass , setShoePass] = useState(false)
    const [error , setError] = useState(false)

    function handleChange(e){
      setuserInfo((prev)=>{
        return{
          ...prev,
          [e.target.name] : e.target.value
        }
      })
    }

    const location = useLocation()

    useEffect(()=>{
      if(location.state?.message){
        toast.error(location.state.message);
      }
    },[location])

    async function handelSubmit(e){
      e.preventDefault()
    try{

    const response = await api.post(
      "/login",
      userInfo,
      { withCredentials: true }
    );

    const user = response.data.user

    dispatch(addUser(user))

    toast.success(response.data.message)
    nevigate("/",{
      state : {
        message : "Login Successfully"
      }
    })
    
    }catch(err){
      toast.error(err.response?.data?.message || "SomeThing Else Error")
      if(err.response?.data?.error == "user"){
        toast.error("USername not found")
      }
    }

    };

  return (
    <>
      <div className="min-h-screen flex pt-20 items-center justify-center bg-gray-50">
        <Toaster position="top-right"   containerStyle={{
          top: '100px',
          right: '1rem',
        }}/>
        <div className="bg-white w-fit max-w-sm p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-1">
            Welcome back
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={handelSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                onChange={(handleChange)}
                value={userInfo.email}
                name="email"
                placeholder="email"
                className={`w-full border rounded-md px-4 py-2 ${error ? "ring-red-500 ring-1" : ""} focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type={`${showPass ? "text" : "password"}`}
                name="password"
                onChange={handleChange}
                value={userInfo.password}
                placeholder="password"
                className={`w-full border rounded-md px-4 py-2 ${error ? "ring-red-500 ring-1" : ""} focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input onClick={()=>setShoePass(!showPass)} type="checkbox" />
                Show Password
              </label>
              <span className="font-semibold cursor-pointer">
                forgot password ?
              </span>
            </div>

            <button type="submit" className="w-full text-white bg-[#33B16C] py-3 rounded-md font-semibold hover:opacity-90">
              Sign in
            </button>

            <p className="text-center text-gray-500 text-sm">
              Don’t have an account?{" "}
              <span className="font-semibold  text-black cursor-pointer">
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
