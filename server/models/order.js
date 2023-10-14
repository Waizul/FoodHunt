import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    user_id: String,
    items: Array,
    itemsQty: Number,
    totalAmount: Number,
  },
  { timestamps: true }
);

export default model('Order', orderSchema)
