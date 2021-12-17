const express = require("express");
require('dotenv').config()
const connectDB = require('./config/db')

connectDB()

const app = express();

const PORT =  process.env.PORT || 3000;

//BODYPARSER
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//ROUTES
app.use("/users", require("./routes/users"));
app.use("/meetings", require("./routes/meetings"));

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
