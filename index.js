const express = require('express');
const cors = require('cors');
const app = express();
const error404 = require('./middlewares/error404');
const bodyParser = require('body-parser')

//Módulos de rutas
const ordersApiRoutes = require('./routes/ordersApiRoutes')

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Routes
app.use('/api/orders', ordersApiRoutes);
app.use(error404);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
