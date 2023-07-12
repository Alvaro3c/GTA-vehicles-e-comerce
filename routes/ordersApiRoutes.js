const express = require('express');
const ordersApiControllers = require('../controllers/ordersApiControllers');
const ordersApiRouter = express.Router();

ordersApiRouter.get('/', ordersApiControllers.getAllOrders);
ordersApiRouter.post('/', ordersApiControllers.createOrder);
ordersApiRouter.put('/', ordersApiControllers.updateOrder);
ordersApiRouter.delete('/', ordersApiControllers.deleteOrder);

module.exports = ordersApiRouter;