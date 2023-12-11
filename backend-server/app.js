const express = require('express')
const app = express();
const routes = require('./routes/route')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')


app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


// mongoose.connect('mongodb://127.0.0.1:27017/event-booking').
//   catch(error => handleError(error));

mongoose.connect('mongodb://127.0.0.1:27017/event-booking');
console.log('Mongo DB connected successfully')

app.use('/api', routes);


app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});

