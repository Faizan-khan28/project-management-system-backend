import express from "express"
import connectDb from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"
import productRouter from "./routes/productRoute.js";

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8003;

// middlewares
app.use(express.json());
app.use(cors({
   origin : "http://localhost:5173",
   credentials : true,
   methods : "GET,POST,PUT,PATCH,DELETE",
}))

app.use("/api/products",productRouter)

app.listen(PORT,()=> {
    connectDb()
    console.log(`Server started at ${PORT}`)
})