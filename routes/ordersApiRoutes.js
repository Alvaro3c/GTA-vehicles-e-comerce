const express = require('express');
const ordersApiControllers = require('../controllers/ordersApiControllers');
const ordersApiRouter = express.Router();

ordersApiRouter.get('/:id_user', ordersApiControllers.getOrderById);
ordersApiRouter.get('/', ordersApiControllers.getAllOrders);
ordersApiRouter.post('/', ordersApiControllers.createOrder);


module.exports = ordersApiRouter;