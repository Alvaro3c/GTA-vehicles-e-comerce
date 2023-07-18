const order = require('../models/orders');

/**
 * @author AlvaroCuallado 
 * @exports routes 
 * @namespace routes 
 */

/**
* @memberof orderApiControllers 
* @method getAllOrders 
* @async 
* @param {Object} req 
* @param {Object} res  
* @return {json} 
* @throws {error} 
*/


const getAllOrders = async (req, res) => {
    let orders;
    orders = await order.getAllOrders();
    res.status(200).json(orders);
};


/**
* @memberof orderApiControllers 
* @method createOrder 
* @async 
* @param {Object} req 
* @param {Object} res  
* @return {json} 
* @throws {error} 
*/
const createOrder = async (req, res) => {
    try {
        const { id_user, cars, total_cost } = req.body;
        const createdOrder = await order.createdOrder(id_user, cars, total_cost);

        res.status(201).json(createdOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Error creating order" });
    }
};

/**
* @memberof orderApiControllers 
* @method getAllOrders 
* @async 
* @param {Object} req 
* @param {Object} res  
* @return {json} 
* @throws {error} 
*/

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



module.exports = {
    getAllOrders,
    createOrder,
    getOrderById
};
