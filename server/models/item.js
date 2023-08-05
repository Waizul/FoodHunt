import { Schema, model } from "mongoose";

const itemSchema = new Schema({
    title: String,
    desc: String,
    price: String,
    imgUrl: String,
    type: String
})


export default model("Item", itemSchema)