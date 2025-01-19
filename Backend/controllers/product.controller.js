import mongoose from "mongoose";
import Product from "../models/Product.model.js";

export const getProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, message: products });
    } catch (error) {
        console.log("Cant fetch the product", error.message);
        res.status(500).json({ success: false, message: "Server error" })

    }
};

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        res.status(401).json({ success: false, message: "Fill all the required fields" })
    }
    const newProduct = Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.log('Error occured in product creation:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });

    }
};
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product id" })
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product deleted' })

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to deleted" })
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const products = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid product Id' });
    }
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, products, { new: true });
        res.status(201).json({ success: true, message: updateProduct })

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" })
    }
};