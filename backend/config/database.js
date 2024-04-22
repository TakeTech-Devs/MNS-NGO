const mongoose = require('mongoose');


const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URL).then((data)=>{
        console.log(`Database connected with: ${process.env.DB_URL}`);
    })
}

module.exports = connectDatabase;