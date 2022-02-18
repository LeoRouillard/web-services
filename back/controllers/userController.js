const User = require("../models/userModel");

exports.FindAll = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 })
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.FindById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      const {password, ...others} = user._doc;
      res.status(200).json(others);
  } catch (error) {
      res.status(500).json(error);
  }
};

exports.Delete = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.Create = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({message: "All fields are required"})
        }
        
    } catch (error) {
        
    }
}
