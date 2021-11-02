'use strict';
module.exports = function(app) {
  var arsenal = require('../controllers/arsenalController');
  var ammo = require('../controllers/AmmoController');

  // arsenal Routes
  app.route('/weapons')
    .get(arsenal.list_all_weapons)
    .post(arsenal.create_a_weapon);


  app.route('/weapons/:weaponId')
    .get(arsenal.read_a_weapon)
    .put(arsenal.update_a_weapon)
    .delete(arsenal.delete_a_weapon);
  
  // Ammo Routes
  app.route('/ammos')
    .get(ammo.list_all_Ammos)
    .post(ammo.create_a_Ammo);


  app.route('/ammos/:ammoId')
    .get(ammo.read_a_Ammo)
    .put(ammo.update_a_Ammo)
    .delete(ammo.delete_a_Ammo);
};
