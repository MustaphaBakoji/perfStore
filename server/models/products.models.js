import { Schema, model } from "mongoose";

let productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,

    },

    price: {
        type: Number,
        required: true,

    },
    imageUrl: {
        type: String,
        required: true
    }

},
    { timeStamps: true })

export let productsModel = model('product', productsSchema)
