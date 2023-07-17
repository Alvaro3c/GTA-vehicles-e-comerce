const order = require('../models/orders');

const getAllOrders = async (req, res) => {
    let orders;
    orders = await order.getAllOrders();
    res.status(200).json(orders);
};

const createOrder = async (req, res) => {
    try {
        const { id_user, cars, total_cost } = req.body;
        // Perform necessary validations on the received data
        // Insert the order data into the PostgreSQL database using the appropriate model or ORM
        // Example code to insert the order using the order model
        const createdOrder = await order.createdOrder(id_user, cars, total_cost);

        res.status(201).json(createdOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Error creating order" });
    }
};

const getOrderById = async (req, res) => {
    try {
        const userId = req.params.id_user;
        // Fetch the order from the database based on the userId
        const orders = await order.getOrdersByUserId(userId);

        if (!orders) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ error: "Error fetching order" });
    }
};


const updateOrder = async (req, res) => {
    // Implement the update order logic
};

const deleteOrder = async (req, res) => {
    // Implement the delete order logic
};

module.exports = {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderById
};
