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
// app.use(fileUpload());

// Enable files upload
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));



//Import Route
const carousel = require("./routes/carouselRoute");
const home = require("./routes/homeRoute");
const about = require("./routes/aboutRoute");
const grievance = require("./routes/grievanceRoute");
const services = require("./routes/servicesRoute");
const goveringBody = require('./routes/goveringBodyRoute');
const gallery = require('./routes/galleryRoute');

app.use("/api/v1/carousel", carousel);
app.use("/api/v1/home", home);
app.use("/api/v1/about", about);
app.use("/api/v1/grievance", grievance);
app.use("/api/v1/services", services)
app.use("/api/v1/goveringBody", goveringBody)
app.use("/api/v1/gallery", gallery)




// Middleware for Errors
app.use(errorMiddleware);

module.exports = app