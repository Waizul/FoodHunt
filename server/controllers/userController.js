import User from "../models/user.js";

export const saveUser = async (req, res) => {
  const user = req.body;

  const existed = await User.findOne({ email: user.email });

  try {
    if (existed) return res.status(201).json(existed);
    const newUser = new User(user);
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send({ data: "User deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(204).json(updatedUser);
  } catch (err) {
    console.log(err);
  }
};
