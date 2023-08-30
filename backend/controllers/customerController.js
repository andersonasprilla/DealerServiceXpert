import asyncHandler from "../middleware/asyncHandler.js";
import Customer from "../models/customerModel.js";

// @desc    Fetch my customers
// @route   GET /api/customers
// @access  Private
const getMyCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({ user: req.user._id });
  res.status(200).json(customers);
});

// @desc    Fetch single customer
// @route   GET /api/customers/:id
// @access  Public
const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    return res.json(customer);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc    Create a customer
// @route   POST /api/customers
// @access  Private
const createCustomer = asyncHandler(async (req, res) => {
  const { tag, ro, vehicle, name, phone, description, isWaiting } = req.body;

  const customer = new Customer({
    user: req.user._id,
    tag,
    ro,
    vehicle,
    name,
    phone,
    description,
    isWaiting,
  });

  try {
    const createdCustomer = await customer.save();
    res.status(201).json(createdCustomer);
  } catch (error) {
    res.status(400).json({ message: "Failed to create customer", error });
  }
});

// @desc    Delete a customer
// @route   DELETE /api/customers/:id
// @access  Private
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    await Customer.deleteOne({ _id: customer._id });
    res.status(200).json({ message: "Customer removed" });
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
});

export { getMyCustomers, getCustomerById, createCustomer, deleteCustomer };
