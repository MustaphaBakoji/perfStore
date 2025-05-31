import { model, Schema } from "mongoose";

let userSchema = new Schema({

    userName: {
        required: true,
        type: String,
        unique: [true, "name already used"]
    },
    email: {
        required: true,
        type: String,
        unique: [true, "email already used"]
    },
    password: {
        required: true,
        type: String,

    },
    role: {
        type: String,
        default: "user",
        enum: ["admin", "user"]

    }

}, { timeStamps: true })

export let userModel = model("user", userSchema)