import express from "express"
import dotenv from "dotenv"
import { DB_CONNECTION } from "../db/DB_CONNECTION.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"
import { indexRouter } from "../routes/index.js"
import cloudinary from "cloudinary"
import bodyParser from "body-parser"
import { productsModel } from "../models/products.models.js"
import { log } from "console"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})
const _dirname = path.resolve()
app.use(express.static(path.join(_dirname, "/client/dist")))

app.use(cors({
    origin: ["http://localhost:5173", "https://perfstore.netlify.app"],

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))


DB_CONNECTION()

app.use("/api", indexRouter)

app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(_dirname, "client", "dist", "index.html"))
})

app.listen(4000, () => {
    console.log("server started at port 4000");


})
