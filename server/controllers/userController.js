import User from "../models/user.js";

export const saveUser = async (req, res) => {
  const user = req.body;
  
  const existed = await User.findOne({email: user.email})
  
  try {
    if(existed) return res.status(201).json(existed)
    const newUser = new User(user);
    const result = await newUser.save();
    res.status(201).json(result)
  } catch (err) {
    console.log(err);
  }
};
