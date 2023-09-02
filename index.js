//? Importing the required packages
const express = require('express');
const checkRouter = require('./routes/check');

//? Initializing the app
const app = express();
const PORT = 8080;

//? Routes
app
    .use(express.json())
    .use(checkRouter);


app.get('/', (req, res) => {
    res.json({success: 'Server is up and running...'});
    }
);

//? STARTING THE SERVER
app.listen(PORT, "0.0.0.0", () => {
    console.log(`
      ******************************************
  
          Server  Connected at port ${PORT}
          Visit - http://localhost:${PORT}
  
      ******************************************`);
  });