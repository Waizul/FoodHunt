import Item from "../models/item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
  }
};

export const getItemsByCategory = async (req, res) => {
  const category = req.query.category;

  try {
    const items = await Item.find({ type: category });
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
  }
};

export const getItemByName = async (req, res) => {
  const name = req.query.name;

  try {
    if (name) {
      const item = await Item.find({ title: name });
      res.status(200).json(item);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getItemById = async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const item = await Item.findById(itemId);
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
};

export const delelteItem = async (req, res) => {
  try {
    await Item.deleteById(req.params.id);
    res.status(204).json(true);
  } catch (err) {
    console.log(err);
  }
};

export const updateItem = async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    res.status(200).json(updatedItem);
  } catch (err) {
    console.log(err);
  }
};
