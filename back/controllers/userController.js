const User = require("../models/userModel");


//GET ALL USER
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

//GET USER
exports.FindById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      const {password, ...others} = user._doc;
      res.status(200).json(others);
  } catch (error) {
      res.status(500).json(error);
  }
};

//DELETE
exports.Delete = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
}

//CREATE
exports.Create = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({message: "All fields are required"})
        }
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,

        });

      await user.save().then(data => {
        res.send(data);
      })
    } catch (error) {
        res.status(500).send({message: error.message || 'user not create '});
    }
}

//UPDATE
exports.Update = async (req, res) => {
  try {
    if(!req.body){
      return res.status(400).send({message: 'All fields are required'}) 
    }
    
    const updateUser = await User.findbyIdAndUpdate(req.params.id,
      {
        $set: req.body
      },
      {new: true}).then(user => {
        if(!user){
          return res.status(404).send({message: 'user not found' + req.params.id})
        }
        
      });
      res.status(200).json(updateUser);
      
  } catch (error) {
    res.status(500).json(error);
  }
}
