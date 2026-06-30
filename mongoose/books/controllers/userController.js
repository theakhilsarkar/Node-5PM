import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.json({ status: true, message: "Signup successfully!", result });
  } catch (err) {
    res
      .status(400)
      .json({ status: false, message: "Signup failed !", err: err.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.json({ status: false, message: "User not found !" });
  }
  if (user.password == password) {
    res.json({ status: true, message: "Signin successfully !", user });
  } else {
    res.json({ status: false, message: "Password wrong !" });
  }
};

// login
// email
// password

// 1. email exist or not
// 2. password match
// 3. success
