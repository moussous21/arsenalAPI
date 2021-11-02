'use strict';

var mongoose = require('mongoose'),
Accessories = mongoose.model('Accessories');

exports.list_all_Accessories = function(req, res) {
  Accessories.find({}, function(err, Accessories) {
    if (err)
      res.send(err);
    res.json(Accessories);
  });
};


exports.create_a_Accessorie = function(req, res) {
    var new_Accessorie = new Accessorie(req.body);
    new_Accessorie.save(function(err, Accessorie) {
      if (err)
        res.send(err);
      res.json(Accessorie);
   });
  };
  
  
  exports.read_a_Accessorie = function(req, res) {
    Accessorie.findById(req.params.AccessorieId, function(err, Accessorie) {
      if (err)
        res.send(err);
      res.json(Accessorie);
    });
  };
  
  
  exports.update_a_Accessorie = function(req, res) {
    Accessorie.findOneAndUpdate({_id: req.params.AccessorieId}, req.body, {new: true}, function(err, Accessorie) {
      if (err)
        res.send(err);
      res.json(Accessorie);
    });
  };
  
  
  exports.delete_a_Accessorie = function(req, res) {
  
  
    Accessorie.remove({
      _id: req.params.AccessorieId
    }, function(err, Accessorie) {
      if (err)
        res.send(err);
      res.json({ message: 'Accessorie successfully deleted' });
    });
  };