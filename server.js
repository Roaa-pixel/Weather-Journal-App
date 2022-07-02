// // Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const routes = require('./routes/api');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware.
// 'use' - allows us to connect packages to our project
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors for accessing resources from remote hosts
const cors = require('cors');
app.use(cors());

// Initialize routes
app.use('/api', routes);

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server by assigning port no
const port = 1521;

// Listen for requests from client side
const server = app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
});