import express from "express";

import { getItemById, getItems, getItemsByCategory, getItemByName } from "../controllers/itemController.js";

const route = express.Router();

//GET
route.get("/", getItems);

route.get("/category", getItemsByCategory);

route.get("/name", getItemByName)

route.get('/:itemId', getItemById)


export default route;
