// const mongoose=require("mongoose")
// const MongoClient = require('mongodb').MongoClient;

// mongoose.set('strictQuery', true);
// const url ='mongodb://localhost:27017/test_db';
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Now you can define your models and perform operations using Mongoose
    
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error);
//   });

const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected"))
.catch(err => console.error("Error connecting to the database:", err));

