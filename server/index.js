import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";

import itemsRoute from "./routes/items.js";
import paymentRoute from "./routes/payment.js"
import orderRoute from "./routes/orders.js"
import userRoute from "./routes/users.js"

config();

const app = express();
const port = process.env.PORT || 5000;


//mongodb connection
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("mongodb connected");
}
main();

//middleware
app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRoute)
app.use('/api/payment', paymentRoute)
app.use('/api/orders', orderRoute)
app.use('/api/users', userRoute)


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/api/items`);
});
