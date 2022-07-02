// Setup empty JS Array to act as endpoint for all routes
const projectData = [];

const express = require('express');
const router = express.Router();

// GET Request that returns projectData
router.get('/weather', (req, res) => {
  res.send(projectData);
});


// POST Request that adds incoming data to projectData
router.post('/weather', (req, res) => {
  const weatherData = {};
  let data = req.body;

  // Create new entry for JS Object Endpoint
  weatherData.temp = data.temp;
  weatherData.date = data.date;
  weatherData.userResponse = data.userResponse;
  weatherData.zipcode = data.zipcode;

  projectData.push(weatherData);

  // Send response to Endpoint
  res.send(projectData);

  console.log(data);
});

module.exports = router;
