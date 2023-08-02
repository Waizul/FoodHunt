import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("mongodb connected");
}
main();

//routes
app.get("/", async (req, res) => {
  res.send("api");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
