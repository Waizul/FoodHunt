import express from "express";

import { getItemById, getItems, getItemsByCategory } from "../controllers/itemController.js";

const route = express.Router();

//GET
route.get("/", getItems);

route.get("/", getItemsByCategory);

route.get('/:itemId', getItemById)

export default route;
