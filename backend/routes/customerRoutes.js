import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  getMyCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";

router.route("/").get(protect, getMyCustomers).post(protect, createCustomer);
router
  .route("/:id")
  .get(protect, getCustomerById)
  .delete(protect, deleteCustomer);

export default router;
