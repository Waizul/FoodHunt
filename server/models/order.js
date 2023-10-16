import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    user_id: String,
    item_id: String,
    title: String,
    price: String,
    imgURL: String,
    qty: Number,
  },
  { timestamps: true }
);

export default model("Order", orderSchema);
