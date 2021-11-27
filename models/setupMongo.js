const mongoose = require("mongoose");

const uri = process.env.DB_URI;

function connect() {
    const options = 
    {
        useNewUrlParser: true,
        
    };

    mongoose.connect(uri, options).then(
        () => { console.log("Database connection successful.");},
        err => { console.log("Error connecting database: ", err); }
    )
}

module.exports = connect;