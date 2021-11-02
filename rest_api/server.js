var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Weapon = require('./api/models/arsenalModel'), //created model loading here
  Ammo = require('./api/models/AmmoModel'),
  Accessorie = require('./api/models/accessoriesModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Arsenaldb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var accessorieRoutes = require('./api/routes/accessoriesRoutes'); //importing route
var ammoRoutes = require('./api/routes/ammoRoutes');
var arsenalRoutes = require('./api/routes/arsenalRoutes');
accessorieRoutes(app); //register the route
ammoRoutes(app);
arsenalRoutes(app);


app.listen(port);


console.log('arsenal RESTful API server started on: ' + port);