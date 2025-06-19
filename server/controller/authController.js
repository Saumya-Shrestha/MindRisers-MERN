const User = require('../model/user');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User Already Exists' });
    }
    user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User Created Succesfully', user });
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createUser };
