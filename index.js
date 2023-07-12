const express = require('express');
const app = express();
const error404 = require('./middlewares/error404');

//Módulos de rutas
const ordersApiRoutes = require('./routes/ordersApiRoutes')

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('funciona');
});

//Rutas
app.use('/api/orders', ordersApiRoutes);
app.use(error404);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});