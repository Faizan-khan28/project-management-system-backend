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