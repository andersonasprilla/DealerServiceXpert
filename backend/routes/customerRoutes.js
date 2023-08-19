import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Customer from "../models/customerModel.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const customers = await Customer.find({});
    res.json(customers);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);

    if (customer) {
      return res.json(customer);
    }

    res.status(404);
    throw new Error("Resource not found");
  })
);

export default router;
