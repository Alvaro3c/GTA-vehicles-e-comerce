const getCarByModel = async (model) => {
    console.log('esto es el modelo ' + model)
    try {
        const response = await fetch(`https://gta.vercel.app/api/vehicles/${model}`);

        const car = await response.json();
        return car
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getCarByModel
};