const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        createdAt: { type: Date, required: true },
        title: { type: String, required: true }
    },
);
  
module.exports = mongoose.model('Category', CategorySchema);