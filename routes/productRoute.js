import express from "express"
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/create-product",createProduct)
productRouter.get("/get-all-product",getAllProducts)
productRouter.get("/get-single-product/:id",getSingleProduct)
productRouter.put("/update-product/:id",updateProduct)
productRouter.delete("/delete-product/:id",deleteProduct)

export default productRouter;