const router = require('express').Router()
const BookingController = require('../controllers/bookingController')


// ● POST: /api/bookings - Create a new booking for a service.
router.post('/bookings', (req, res) => BookingController.createNewBooking(req, res));



// // GET: /api/services - Retrieve a list of services.
router.get('/services', (req, res) => BookingController.getAllServices(req, res));


// // ● GET: /api/services/:id - Retrieve details of a specific service.
router.get('/services/:id', (req, res) => BookingController.getServiceById(req, res));







module.exports = router