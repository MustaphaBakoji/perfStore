import { productsModel } from "../models/products.models.js";

export let getProducts = async (req, res) => {

    try {
        let products = await productsModel.find()


        if (products.length > 0) {
            return res.status(200).json({
                success: true,
                data: products
            })

        }
        else {
            res.status(404).json({
                success: false,
                message: "no products found !"

            })
        }



    } catch (error) {
        return res.status(500).res({
            success: false,
            messsage: error.message

        })

    }
}



export let Product = async (req, res) => {
    let { id } = req.params
    try {
        let product = await productsModel.findOne()
        if (product.length > 0) {
            return res.status(200).res({
                success: true,
                data: product
            })

        }
        else {
            res.status(404).json({
                success: false,
                message: "no products found !"

            })
        }



    } catch (error) {

    }
}

export let getProductsByCategoryAndAnimalType = async (req, res) => {
    let { category, animalType } = req.params
    try {
        let products = await productsModel.find({
            category: category,
            animalType: animalType
        })
        if (products.length > 0) {
            return res.status(200).json({
                success: true,
                data: products
            })

        }
        else {
            res.status(404).json({
                success: false,
                message: "no products found !"

            })
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            messsage: error.message

        })
    }
}

export let getProductsByCategory = async (req, res) => {
    let { category } = req.params
    try {
        let products = await productsModel.find({
            category: category
        })
        if (products.length > 0) {
            return res.status(200).json({
                success: true,
                data: products
            })

        }
        else {
            res.status(404).json({
                success: false,
                message: "no products found !"

            })
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            messsage: error.message

        })
    }
}