const Ads = require("../models/adsModel");

exports.findAll = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await Ads.find().sort({ _id: -1 })
      : await Ads.find();
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  try {
      const ads = await Ads.findById(req.params.id);
      res.status(200).json(ads);
  } catch (error) {
      res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("ads has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.create = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({message: "All fields are required"})
        } else {
                
        }
    } catch (error) {
        
    }
}