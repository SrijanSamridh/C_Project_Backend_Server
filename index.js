//? Importing the required packages
const express = require("express");
const mongoose = require("mongoose");

//? Importing the routes
const checkRouter = require("./routes/check");
const saveRouter = require("./routes/saveNumber");
const numberRouter = require("./routes/getNumber");

//? Initializing the app
const app = express();
const PORT = 8080;
const DB_URL =
  "mongodb+srv://srijan1384:Steven8820@cluster0.0vq7o2w.mongodb.net/?retryWrites=true&w=majority";

//? Connecting to the database
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connection Established with database - Successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

//? Routes
app.use(express.urlencoded({ extended: true }))
   .use(express.json())
   .use(checkRouter)
   .use(saveRouter)
   .use(numberRouter);

app.get("/", (req, res) => {
  res.json({ success: "Server is up and running..." });
});

//? STARTING THE SERVER
app.listen(PORT, "0.0.0.0", () => {
  console.log(`
      ******************************************
  
          Server  Connected at port ${PORT}
          Visit - http://localhost:${PORT}
  
      ******************************************`);
});
