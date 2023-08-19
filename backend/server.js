import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import customerRoutes from "./routes/customerRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running...");
});

app.use("/api/customers", customerRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
