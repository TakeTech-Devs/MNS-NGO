const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');

dotenv.config({path: "config/config.env"});

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
// }));

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'https://mallarpurnaisuva.org', 'https://cp.mallarpurnaisuva.org'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));


app.use(express.json());
app.use(cookieParser());
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
const contact = require('./routes/contactRoute');
const getTouch = require('./routes/getTouchRoute');
const admin = require('./routes/userRoute');
const other = require('./routes/otherRoute');

app.use("/api/v1/carousel", carousel);
app.use("/api/v1/home", home);
app.use("/api/v1/about", about);
app.use("/api/v1/grievance", grievance);
app.use("/api/v1/services", services)
app.use("/api/v1/goveringBody", goveringBody)
app.use("/api/v1/gallery", gallery)
app.use("/api/v1/contact", contact)
app.use("/api/v1/touch", getTouch)
app.use("/api/v1/admin", admin)
app.use("/api/v1/other", other)




// Middleware for Errors
app.use(errorMiddleware);

module.exports = app