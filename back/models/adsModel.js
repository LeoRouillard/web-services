const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema(
    {
        createdAt: { type: Date, required: true },
        intitule: { type: String, required: true },
        description: { type: String, required: true },
        prix: { type: Number, required: true },
        categorie: { type: mongoose.Schema.Types.ObjectId, required: true },
        image: { type: String, required: true },
        adresse: { type: String, required: true },
        publiee: { type: Boolean, required: true },
        owner: { type: mongoose.Schema.Types.ObjectId, required: true },
        buyer: { type: mongoose.Schema.Types.ObjectId, required: false },
    },
  );
  
module.exports = mongoose.model('Ads', AdsSchema);