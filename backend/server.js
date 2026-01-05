import express from "express"
import router from "./routes/routes.js"
import "./config/db.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/",router)

app.listen(3000 , ()=>{
    console.log("Server Startetd at Port 3000")
})