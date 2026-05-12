import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConnection from "./config/dbConnection.js";

import authRoutes from "./routes/authenticationRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config();

dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});