import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    photoURL: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

export default model('User', userSchema)