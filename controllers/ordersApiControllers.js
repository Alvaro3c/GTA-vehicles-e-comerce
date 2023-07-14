const order = require('../models/orders');
const vehiclesApiController = require('../controllers/vehiclesApiControllers')

const getAllOrders = async (req, res) => {
    let orders
    orders = await order.getAllOrders()
    res.status(200).json(orders);
};

const createOrder = async (req, res) => {
    /* 
    Queremos introducir en la tabla de orders el id del usuario que lo crea, los coches que se han comprado y en que cantidad y el coste total calculado del pedido. Si no hay un usuario logeado, será el numero 1.
    */

    if (req.body.cars && req.body.cars.length > 0) {
        const cars = req.body.cars
        const filteredCars = cars.filter((car) => {
            return car.car_model
        })
        let totalPrice = 0
        /*    await filteredCars.map(async (car) => {
               let response = await vehiclesApiController.getCarByModel(car.car_model)
               let price = response.price
               console.log(price)
               totalPrice = totalPrice + price
           }) */
        const promises = filteredCars.map(car => vehiclesApiController.getCarByModel(car.car_model).then(response => response));
        const responses = await Promise.all(promises);
        responses.map((response) => {
            let price = response.price
            console.log(price)
            totalPrice = totalPrice + price
        })
        //A partir de aqui pasar al model y a ua query que inserte cada dato
        res.status(201).send('orden creada')
    } else {
        res.status(400).send('Petición incorrecta')
    }

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