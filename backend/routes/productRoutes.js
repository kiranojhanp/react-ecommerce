import express from "express";
const router = express.Router();
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.get("/top", getTopProducts);

router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route("/:id/review").post(protect, createProductReview);


export default router;
