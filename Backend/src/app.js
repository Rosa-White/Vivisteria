import express from "express";
import cors from "cors";

import orderModel from "./models/order.model.js";
import productModel from "./models/product.model.js";
import accessoryModel from "./models/accessory.model.js";
import medicinalPlantModel from "./models/medicinalPlant.model.js";
import loginModel from "./models/login.model.js";

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

dotenv.config()

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   PRODUCTS
========================= */

// GET all products
app.get("/products", async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ADD product (POST)
app.post("/products", async (req, res) => {
  try {
    const product = await productModel.create(req.body);

    res.json({
      message: "Product added successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =========================
   ACCESSORIES
========================= */

// GET accessories
app.get("/accessories", async (req, res) => {
  try {
    const accessories = await accessoryModel.find();
    res.json(accessories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ADD accessory (POST)
app.post("/accessories", async (req, res) => {
  try {
    const accessory = await accessoryModel.create(req.body);

    res.json({
      message: "Accessory added",
      accessory,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =========================
   MEDICINAL PLANTS
========================= */

// GET plants
app.get("/medicinal-plants", async (req, res) => {
  try {
    const plants = await medicinalPlantModel.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ADD plant (POST)
app.post("/medicinal-plants", async (req, res) => {
  try {
    const plant = await medicinalPlantModel.create(req.body);

    res.json({
      message: "Medicinal plant added",
      plant,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =========================
   ORDERS
========================= */

// CREATE ORDER (checkout)
app.post("/orders", async (req, res) => {
  try {
    const order = await orderModel.create(req.body);

    res.json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL ORDERS (for admin / testing)
app.get("/orders", async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const validEmail = await loginModel.findOne({ email });

  if (!validEmail) {
    return res.json({ error: "Invalid email" });
  }
  if (validEmail.password !== password) {
    return res.json({ error: "Invalid password" });
  }
  res.json({ message: "Login successful" });
});

// SIGNUP
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const existingEmail = await loginModel.findOne({ email });

  if (existingEmail) {
    return res.json({ error: "Email already exists" });
  }
  const newUser = await loginModel.create({ name, email, password });
  res.json({ message: "Account created successfully", user: newUser });
});

export default app;