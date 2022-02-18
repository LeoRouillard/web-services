const Category = require("../models/categoryModel");

exports.findAll = async (req, res) => {
  const query = req.query.new;
  try {
    const category = query
        ? await Category.find().sort({ _id: -1 })
        : await Category.find();
        res.status(200).json(category);
  } catch (error) {
        res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
  } catch (error) {
        res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json("Category has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.create = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({message: "All fields are required"})
        } else {
            const category = new Category({
                createdAt: new Date(),
                title: req.body.title
            });
            
            category.save().then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({ message: err.message || 'Problem create category' });
            });
        }
    } catch (error) {
        res.status(500).send({ message: err.message || 'Problem create category' });
    }
}