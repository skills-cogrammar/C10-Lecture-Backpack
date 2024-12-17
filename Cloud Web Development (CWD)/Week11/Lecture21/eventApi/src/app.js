const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

app.use(express.json()); // allows us to accept JSON from API calls
app.use(cors()) // allows us to connect our API to the client application


const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "eventsApi"
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Endpoints 
const tourRoutes = require("./routes/tour.route");
app.use("/tours", tourRoutes);

module.exports = app;