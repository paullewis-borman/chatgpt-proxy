// Load default modules needed for expressJS API server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Allow .env file to use for 
require('dotenv/config');

// Allow connection to API from any client (CORS)
const cors = require('cors');

//
// Setup CORS
//
const corsOptions = {
    origin: true,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));  
app.use(bodyParser.json());

//
//Import Routes
//

// Default route
app.get('/', (req,res) =>{
    res.send('Default chat-gpt wrapper route - welcome, use our API, but be nice!');
})

// Get route to list of all speech bubbles for current URL
const getchatGPTRoute = require('./routes/chatgpt');
app.use('/chatGPT', getchatGPTRoute);


// Start the web server listening on port 3000
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});