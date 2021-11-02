'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AmmoSchema = new Schema({
  name: {
    type: String,
    required: "Rentrez le nom de la munition"
  },
  type: {
    type: String,
    required: "Rentrez le type de la munition"
  },
  calibre: {
    type: String,
    required: "Rentrez le calibre de la munition"
  },
  marque: {
    type: String,
    required: "Rentrez la marque de la munition"
  },
  Caractéristiques: {
    type: String,
    required: "Rentrez les Caractéristiques de la munition"
  },
  poids: {
    type: String,
    required: "Rentrez le poids de la munition"
  },
  percussion: {
    type: String,
    required: "Rentrez la percussion de la munition"
  },
  Amorçage: {
    type: String,
    required: "Rentrez l'armorçage de la munition"
  },
});

module.exports = mongoose.model('Ammos', AmmoSchema);