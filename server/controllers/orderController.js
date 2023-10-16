import Order from "../models/order.js";

export const saveOrder = async (req, res) => {
  const orderedItems = req.body;
  try {
    await Promise.all(
      orderedItems.items.map(async (item) => {
        const order = {
          user_id: orderedItems.user_id,
          item_id: item._id,
          title: item.title,
          price: item.price,
          imgURL: item.imgURL,
          qty: item.qty,
        };

        const orderItem = new Order(order);
        await orderItem.save();
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const getOrders = async (req, res) => {
  try {
    const result = await Order.find();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

export const getOrdersByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const allOrders = await Order.find({ user_id: userId });
    res.status(200).json(allOrders);
  } catch (err) {
    console.log(err);
  }
};
