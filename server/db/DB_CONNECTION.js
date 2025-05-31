import mongoose from "mongoose"

export let DB_CONNECTION = () => {
    mongoose.connect(process.env.DB || "mongodb+srv://binadamubakoji:3HI1mXTWVcxGDKnu@cluster0.fjxd4nz.mongodb.net/perfStore")
        .then(() => {
            console.log("DB connected successfully")
        })
        .catch((error) => {
            console.log("DB connection failed", error.message)
        })

}