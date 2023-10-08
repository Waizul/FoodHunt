import express from "express";
import { paymentIntent } from "../controllers/paymentController.js";

const route = express.Router();

route.post("/create-payment-intent", paymentIntent);

export default route;
