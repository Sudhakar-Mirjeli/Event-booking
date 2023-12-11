const mongoose = require('mongoose')


const bookingSchema = new mongoose.Schema({

    serviceName: {
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    }

});
const BookingModel = mongoose.model('bookings', bookingSchema);


module.exports =  BookingModel