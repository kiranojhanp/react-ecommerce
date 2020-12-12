import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/").get(protect, admin, getUsers);
router.route("/:id").delete(protect, admin, deleteUser);

export default router;
