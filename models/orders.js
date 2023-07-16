const pool = require('../utils/db-sql-orders'); // Conexión a la BBDD
const queries = require('./queries'); // Queries SQL

const getAllOrders = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllOrders)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createdOrder = async (id_user, cars, total_cost) => {
    let client, result;
    console.log(id_user)
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createOrder, [id_user, cars, total_cost])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


const orders = {
    getAllOrders,
    createdOrder
}

module.exports = orders;