const order = require('../models/orders');

const getAllOrders = async (req, res) => {
    let orders
    orders = await order.getAllOrders()
    res.status(200).json(orders);
};

const createOrder = async (req, res) => {

};

const updateOrder = async (req, res) => {

};

const deleteOrder = async (req, res) => {

};


module.exports = {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder
};