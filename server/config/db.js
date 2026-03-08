const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongoose connect successful");
    });
}

module.exports = connectDB;