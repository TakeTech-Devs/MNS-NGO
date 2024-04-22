const app = require('./app');
const dotenv = require('dotenv');
const database = require('./config/database');
const cloudinary = require("cloudinary").v2;



dotenv.config({path: "config/config.env"});

process.on("unhandledRejection", (err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Error`);
    process.exit(1);
});

// Connect to Database

database();


// Cloudinary 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



// Connect to PORT

const server = app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

// Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down The Server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
})
