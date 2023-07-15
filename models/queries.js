const { createOrder } = require("../controllers/ordersApiControllers");

const queries = {
    getAllOrders: `SELECT * from orders`,
    createOrder: `INSERT INTO your_table (id_user, cars, total_cost) VALUES ($1, $2, $3) RETURNING *`
}

module.exports = queries;