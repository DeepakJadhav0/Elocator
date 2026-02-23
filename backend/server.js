import express from "express"
import router from "./routes/routes.js"
import "./config/db.js"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials : true,
    origin : "http://localhost:5173"
}))
app.use("/",router)

app.listen(PORT , ()=>{
    console.log("Server Startetd at Port",PORT)
})