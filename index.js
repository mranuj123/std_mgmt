// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
require('./Database/connection')
const port = 8000;
const { connection } = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello, World2!');
});


const categoryRoutes=require('./Routes/categoryRoutes');


app.use('/api',categoryRoutes)

// port=process.connection.PORT || 8000
app.listen(port,()=>{
    console.log(`server started in port ${port}`)
})