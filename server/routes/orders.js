import express from "express";

import { saveOrder } from "../controllers/orderController.js";

const route = express.Router();

route.post('/', saveOrder)

export default route