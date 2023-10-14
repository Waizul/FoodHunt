import express from "express";

import { saveUser } from "../controllers/userController.js";

const route = express.Router();

// route.put("/", saveUser);
route.post("/", saveUser);

export default route;
