'use strict';

module.exports = function(app) {
  var accessorie = require('../controllers/accessoriesController');

  // Accessories Routes
  app.route('/accessories')
    .get(accessorie.list_all_Accessories)
    .post(accessorie.create_a_Accessorie);


  app.route('/accessories/:accessorieId')
    .get(accessorie.read_a_Accessorie)
    .put(accessorie.update_a_Accessorie)
    .delete(accessorie.delete_a_Accessorie);
};
