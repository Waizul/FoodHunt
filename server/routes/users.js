import express from "express";

import {
  deleteUser,
  getUsers,
  saveUser,
  updateUser,
} from "../controllers/userController.js";

const route = express.Router();

// route.put("/", saveUser);
route.post("/", saveUser);
route.get("/", getUsers);
route.delete("/:id", deleteUser);
route.put("/:id", updateUser);

export default route;
