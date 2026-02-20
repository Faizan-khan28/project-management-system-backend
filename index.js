import express from "express"
import connectDb from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8003;

// middlewares
app.use(express.json());
app.use(cors({
   origin : "http://localhost:5173",
   credentials : true,
   methods : "GET,POST,PUT,DELETE",
}))

app.get("/",(req ,res)=> {
    return res.status(200).json({message: "product management system"})
})

app.listen(PORT,()=> {
    connectDb()
    console.log(`Server started at ${PORT}`)
})