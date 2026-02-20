import Product from "../model/product.js";

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
        return res.status(201).json({message: "Product created successfully",product})
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
        return res.status(200).json({message:"Products fetched successfully",product})
    } catch (error) {
        return res.status(500).json({message: `Error in getAllProducts ${error.message}`})
    }
}

export const getSingleProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if(!product) {
            return res.status(404).json({message: "product Not Found"})
        }
        return res.status(200).json({message:"Product fetched successfully",product})
    } catch (error) {
        return res.status(500).json({message: `Error in getSingleProduct ${error.message}`})
    }
}

export const updateProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({
            message: "Invalid product ID"
          });
        }
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            req.body,
            {new:true, runValidators:true}
        )
        if(!updatedProduct) {
            return res.status(400).json({message: "product not found"})
        }
       return res.status(200).json({message:"Product Updated successfully",updatedProduct})
    } catch (error) {
        return res.status(500).json({message: `Error in updateProduct ${error.message}`})
    }
}