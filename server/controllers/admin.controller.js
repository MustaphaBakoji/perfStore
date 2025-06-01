import cloudinary from 'cloudinary';
import { productsModel } from '../models/products.models.js';
export let addNewProduct = async (req, res) => {
    let { name, price, image, category, animalType } = req.body
    try {
        let result = await cloudinary.v2.uploader.upload(image, {
            folder: 'products',
            width: 500,
            height: 500,
            crop: 'fill'
        });
        let product = new productsModel({
            name,
            price,
            imageUrl: result.secure_url,
            category,

        });
        await product.save();
        return res.status(201).json({
            success: true,
            data: product
        });
    } catch (e) {
        console.log(e);

        return res.status(500).json({
            success: false,
            message: e.message
        });
    }
}


export let deletePRoduct = async (req, res) => {
    try {
        const product = await productsModel.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        // Delete image from cloudinary
        const imageId = product.imageUrl.split('/').pop().split('.')[0];
        await cloudinary.v2.uploader.destroy(`products/${imageId}`);

        return res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

export let updateProduct = async (req, res) => {
    try {
        const { name, price, image, category, animalType } = req.body;
        let product = await productsModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        // If new image is provided, upload it and delete old one
        if (image) {
            const imageId = product.imageUrl.split('/').pop().split('.')[0];
            await cloudinary.v2.uploader.destroy(`products/${imageId}`);

            const result = await cloudinary.v2.uploader.upload(image, {
                folder: 'products',
                width: 500,
                height: 500,
                crop: 'fill'
            });
            product.imageUrl = result.secure_url;
        }

        product.name = name || product.name;
        product.price = price || product.price;
        product.category = category || product.category;
        product.animalType = animalType || product.animalType;

        await product.save();

        return res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}