const express = require('express');

const checkRouter = express.Router();

checkRouter.get('/api/check/', (req, res) => {
    res.json({success: 'Server is up and running...', 
    message: 'Checking Route Running Successfully!'});
    }
);

module.exports = checkRouter;