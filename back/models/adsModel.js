const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema(
    {
        createdAt: { type: Date, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        //category: { type: mongoose.Schema.Types.ObjectId, required: true },
        image: { type: String, required: true },
        adress: { type: String, required: true },
        isPublish: { type: Boolean, required: true },
       // owner: { type: mongoose.Schema.Types.ObjectId, required: true },
        buyer: { type: mongoose.Schema.Types.ObjectId, required: false },
    },
  );
  
module.exports = mongoose.model('Ads', AdsSchema);