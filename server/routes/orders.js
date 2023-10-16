import express from "express";

import { getOrders, saveOrder } from "../controllers/orderController.js";

const route = express.Router();

route.post('/', saveOrder)
route.get('/', getOrders)

export default route