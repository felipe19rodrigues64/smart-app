// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
const product = require('./routes/product.route'); 

// Imports routes for the products
app.use('/products', product);


let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

