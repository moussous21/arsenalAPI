'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WeaponSchema = new Schema({
  name: {
    type: String,
    required: "Rentrez le nom de l'arme"
  },
  type: {
    type: String,
    required: "Rentrez le type d'arme"
  },
  calibre: {
    type: String,
    required: "Rentrez le calibre de l'arme"
  },
  marque: {
    type: String,
    required: "Rentrez la marque de l'arme"
  },
  couleur: {
    type: String,
    required: "Rentrez la couleur de l'arme"
  },
  Matière: {
    type: String,
    required: "Rentrez la Matière de l'arme"
  },
  Longueur: {
    type: String,
    required: "Rentrez la longueur de l'arme"
  },
  Largeur: {
    type: String,
    required: "Rentrez la largeur de l'arme"
  },
  Hauteur: {
    type: String,
    required: "Rentrez la hauteur de l'arme"
  },
  Poids: {
    type: String,
    required: "Rentrez le poids de l'arme"
  },
  chargeur: {
    type: String,
    required: "Rentrez la capacité du chargeur"
  },
  Caractéristiques: {
    type: String,
    required: "Rentrez les Caractéristiques de l'arme"
  },
});



module.exports = mongoose.model('Weapons', WeaponSchema);