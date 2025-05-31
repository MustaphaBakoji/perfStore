import { model, Schema } from "mongoose";

let cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    quantity: {
        type: Number,

    }


})
export let cartModel = model("cart", cartSchema)
