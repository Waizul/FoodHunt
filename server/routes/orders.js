import express from "express";

import {
  getOrders,
  getOrdersByUserId,
  saveOrder,
} from "../controllers/orderController.js";

const route = express.Router();

route.post("/", saveOrder);
route.get("/", getOrders);
route.get("/:userId", getOrdersByUserId);

export default route;
