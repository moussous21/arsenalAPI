'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccessorieSchema = new Schema({
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
});

module.exports = mongoose.model('Accessories', AccessorieSchema);