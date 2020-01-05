const express = require('express');
const apiRoutes = express.Router();
const Sucursales = require('../controllers/sucursales.controller');

//All routers of Sucursales
apiRoutes.route('/sucursales/list').get(Sucursales.getSucursales);

module.exports = apiRoutes;