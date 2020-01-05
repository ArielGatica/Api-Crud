const express = require('express');
const apiRoutes = express.Router();
const Cars = require('../controllers/cars.controller');

//All routes of CARS
apiRoutes.route('/cars/list').get(Cars.listCars);
apiRoutes.route('/cars/save').post(Cars.saveCars);
apiRoutes.route('/cars/delete/:_id').delete(Cars.removeCars);
apiRoutes.route('/cars/edit/:_id').put(Cars.editCars);

module.exports = apiRoutes;