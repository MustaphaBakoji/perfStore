import { cartModel } from "../models/cart.models.js";

export let add_to_cart = async (req, res) => {
    let { id } = req
    let { productId } = req.params


    try {

        let cartItem = await cartModel.findOne({ product: productId })
        if (cartItem) {
            console.log("found");

            let upadatedCart = await cartModel.findByIdAndUpdate(cartItem._id, { quantity: cartItem.quantity + 1 })
            upadatedCart.save()
            upadatedCart = await upadatedCart.populate("product")
            return res.status(200).json({
                success: true,
                data: upadatedCart
            })
        }
        else {
            let newCart = await cartModel.create({
                product: productId,
                user: id,
                quantity: 1
            })
            newCart = await newCart.populate("product")

            return res.status(200).json({
                success: true,
                data: newCart
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export let minus_from_cart = async (req, res) => {
    let { id } = req
    let { productId } = req.params
    try {

        let cartItem = await cartModel.findOne({ product: productId })
        if (cartItem) {
            if (cartItem.quantity > 1) {
                let upadatedCart = await cartModel.findByIdAndUpdate(cartItem._id, { quantity: cartItem.quantity - 1 })

                return res.status(200).json({
                    success: true,
                    data: upadatedCart
                })
            }
            else if (cartItem.quantity === 1) {
                cartModel.findByIdAndDelete(cartItem._id)
                return res.status(204).json({
                    success: true,



                })

            }

        }
        else {
            return res.status(404).json({
                success: false,
                message: 'item not found !'

            })

        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export let getAllCarts = async (req, res) => {
    let { id } = req
    try {
        let carts = await cartModel.find({ user: id }).populate("product")
        if (carts.length === 0) {
            return res.status(404).json({
                success: false,
                message: "cart empty  "
            })
        }
        return res.status(200).json({
            success: true,
            data: carts
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

export let deleteCart = async (req, res) => {
    let { id } = req
    let { productId } = req.params
    try {
        let cartItem = await cartModel.findOne({ product: productId })
        console.log(cartItem);

        if (cartItem) {
            await cartModel.findByIdAndDelete(cartItem._id)
            return res.status(204).json({
                success: true,
                message: "item deleted successfully !"
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: 'item not found !'

            })

        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}