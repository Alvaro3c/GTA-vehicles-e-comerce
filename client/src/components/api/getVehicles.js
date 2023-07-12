const getVehiclesApi = () => {
    return fetch('https://gta.vercel.app/api/vehicles/all?limit=20')
}

export default getVehiclesApi