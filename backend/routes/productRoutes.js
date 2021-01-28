import express from "express";
const router = express.Router();
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);

const demo = (req, res) => {
  console.log(req.user);
};

router
.route("/:id")
.get(getProductById)
.put(protect, admin, updateProduct)
.delete(protect, admin, deleteProduct);

router.route("/:id/review").post(protect, createProductReview);


export default router;
