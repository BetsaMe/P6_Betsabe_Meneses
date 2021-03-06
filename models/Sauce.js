const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({ //La méthode Schema de Mongoose permet de créer un schéma de données pour votre bdd MongoDB.//
  userId:{type: String, required: true},
  name:{type: String, required: true},
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number},
  dislikes: { type: Number },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

module.exports = mongoose.model('Sauce', sauceSchema); //La méthode model transforme ce modèle en un modèle utilisable.//