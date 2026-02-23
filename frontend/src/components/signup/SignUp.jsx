import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "./validation";
import axios from "axios";
import toast , {Toaster} from "react-hot-toast"

export default function SignUp() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phone: "",
    fullname: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPass , setShowPass] = useState(false)

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = validate.safeParse(userInfo);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        username: fieldErrors.username ? fieldErrors.username[0] : "",
        email: fieldErrors.email ? fieldErrors.email[0] : "",
        phone: fieldErrors.phone ? fieldErrors.phone[0] : "",
        fullname: fieldErrors.fullname ? fieldErrors.fullname[0] : "",
        password: fieldErrors.password ? fieldErrors.password[0] : "",
        cpassword: fieldErrors.cpassword ? fieldErrors.cpassword[0] : "",
      });
    } else {
      setErrors({});
      setIsLoading(true);

      try {
        
        const { cpassword, ...dataToSend } = userInfo;

        const response = await axios.post(
          "http://localhost:3000/register",
          dataToSend,
          { withCredentials: true }
        );

        toast.success("User Added Succefully")
        navigate("/login");
      } catch (error) {

        toast.error(error.response?.data?.error || "Registration failed");
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center pt-20 justify-center bg-gray-50">
      <Toaster position="top-right" />
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-1">
          Welcome to Elocate
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Please enter your details to register
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="UserName"
              placeholder="User Name"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
              error={errors.username}
            />
            <Input
              label="Phone Number"
              placeholder="Phone Number"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <Input
              label="Email"
              placeholder="Email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              label="Full Name"
              placeholder="Full Name"
              name="fullname"
              value={userInfo.fullname}
              onChange={handleChange}
              error={errors.fullname}
            />
            <Input
              label="Password"
              placeholder="Password"
              type={`${showPass ? "text" : "password"}`}
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm Password"
              type={`${showPass ? "text" : "password"}`}
              name="cpassword"
              value={userInfo.cpassword}
              onChange={handleChange}
              error={errors.cpassword}
            />
          </div>

          <div className="flex items-center justify-between mt-4 text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" onClick={()=>setShowPass(!showPass)} className="scale-90" />
              Show Password
            </label>
            <span className="font-semibold cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-5 text-white py-2 bg-[#33B16C] rounded-md text-sm font-semibold hover:opacity-90 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-3">
          Already have an account?{" "}
          <span className="font-semibold text-black cursor-pointer">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = "text", value, onChange, name, error }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        name={name}
        className={`w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 ${
          error ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
