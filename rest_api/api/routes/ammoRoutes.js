'use strict';

module.exports = function(app) {
  var ammo = require('../controllers/AmmoController');
  
  // Ammo Routes
  app.route('/ammos')
    .get(ammo.list_all_Ammos)
    .post(ammo.create_a_Ammo);


  app.route('/ammos/:ammoId')
    .get(ammo.read_a_Ammo)
    .put(ammo.update_a_Ammo)
    .delete(ammo.delete_a_Ammo);

};
