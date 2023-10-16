import express from "express";

import { deleteUser, getUsers, saveUser } from "../controllers/userController.js";

const route = express.Router();

// route.put("/", saveUser);
route.post("/", saveUser);
route.get('/', getUsers)
route.delete("/:id", deleteUser);

export default route;
