import express from "express";
import customers from "./data/customers.js";
const port = 5001;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running...");
});

app.get("/api/customers", (req, res) => {
  res.json(customers);
});

app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c._id === req.params.id);
  res.json(customer);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
