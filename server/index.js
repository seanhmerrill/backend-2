const express = require('express');
const cors = require('cors');
const ctrl = require('./ctrl');

const {
    getAllHouses, 
    createHouse,
    updateHouse, 
    deleteHouse,  
} = ctrl;

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

const SERVER_PORT = 4004;

const indexURL = '/api/houses'

//API
app.get(`${indexURL}`, getAllHouses);
app.post(`${indexURL}`, createHouse);
app.put(`${indexURL}:id`, updateHouse);
app.delete(`${indexURL}:identification`, deleteHouse);


app.listen(SERVER_PORT, () =>
    console.log(`Server running on server port ${SERVER_PORT}`)
);