import Product from "../model/product";

export const createProduct = async (req,res) => {
    try {
        const {name,price,category,inStock} = req.body;
        if(!name || !price===undefined || !category) {
          return res.status(400).json({message: "Name, price and category are required"})
        }
        if (typeof price !== "number") {
          return res.status(400).json({ message: "Price must be a number" });
        }
        const product = await Product.create({
            name,price,category,inStock
        })
        return res.status(201).json({message: `Product created successfully ${product}`})
    } catch (error) {
        return res.status(500).json({message: `Error in createProduct ${error.message}`})
    }
}

export const getAllProducts = async (req,res) => {
    try {
        const product = await Product.find();
        if(product.length === 0) {
            return res.status(404).json({message: "No Product Found"})
        }
        return res.status(200).json({message:`Products fetched successfully ${product}`})
    } catch (error) {
        return res.status(500).json({message: `Error in getAllProducts ${error.message}`})
    }
}