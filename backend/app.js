const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/error');

dotenv.config({path: "config/config.env"});

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
// }));
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());



//Import Route
const carousel = require("./routes/carouselRoute");
const about = require("./routes/aboutRoute");

app.use("/api/v1/carousel", carousel);
app.use("/api/v1/about", about);



// Middleware for Errors
app.use(errorMiddleware);

module.exports = app