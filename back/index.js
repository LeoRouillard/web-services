const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoute");
const adsRoutes = require("./routes/adsRoute");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use("/api/users", userRoutes);
app.use("/api/ads", adsRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});