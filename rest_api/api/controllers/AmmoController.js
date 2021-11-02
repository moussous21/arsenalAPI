'use strict';


var mongoose = require('mongoose'),
Ammos = mongoose.model('Ammos');

exports.list_all_Ammos = function(req, res) {
  Ammos.find({}, function(err, Ammos) {
    if (err)
      res.send(err);
    res.json(Ammos);
  });
};


exports.create_a_Ammo = function(req, res) {
    var new_Ammo = new Ammo(req.body);
    new_Ammo.save(function(err, Ammo) {
      if (err)
        res.send(err);
      res.json(Ammo);
   });
  };
  
  
  exports.read_a_Ammo = function(req, res) {
    Ammo.findById(req.params.AmmoId, function(err, Ammo) {
      if (err)
        res.send(err);
      res.json(Ammo);
    });
  };
  
  
  exports.update_a_Ammo = function(req, res) {
    Ammo.findOneAndUpdate({_id: req.params.AmmoId}, req.body, {new: true}, function(err, Ammo) {
      if (err)
        res.send(err);
      res.json(Ammo);
    });
  };
  
  
  exports.delete_a_Ammo = function(req, res) {
  
  
    Ammo.remove({
      _id: req.params.AmmoId
    }, function(err, Ammo) {
      if (err)
        res.send(err);
      res.json({ message: 'Ammo successfully deleted' });
    });
  };