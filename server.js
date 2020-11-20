const express = require("express");
const mongoose = require("mongoose");
const connection =
  MONGODB_URI ;
const PORT = process.env.PORT || 3001;
const app = express();
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017" + "MERN-location-app";
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));

//middleware
app.use(express.json());

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://destinations-api-project3.herokuapp.com/users",
  "https://destinations-api-project3.herokuapp.com/locations",
  "https://destinations-api-project3.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Database Error / Disconnection
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

// Database Connection Successful
mongoose.connection.once("open", () => {
  console.log("connected to mongoose!");
});

//Controllers and Routes
const locationsController = require("./controllers/locations");
app.use("/locations", locationsController);
const usersController = require("./controllers/users");
app.use("/users", usersController);

app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
