const BookingModel = require('./../models/bookingModel')
const mongoose = require('mongoose')

async function createNewBooking(req, res) {
    try {
        console.log('Inside BookingService:createNewBooking method ')
        const newBooking = new BookingModel(req.body)
        await newBooking.save();
        
        return {
            status: true,
            message: 'Booking is created succesfully.'
        }

    } catch (error) {
        console.log('Inside BookingService:createNewBooking method ', error)

    }
}

async function getAllServices(req, res) {
    try {
        console.log('Inside BookingService:getAllServices method ')

        const bookingData = await BookingModel.find()
        return {
            status: true,
            data: bookingData,
            message: 'Booking services retrieved succesfully.'
        }

    } catch (error) {
        console.log('Inside BookingService:getAllServices method ', error)
    }
}

async function getServiceById(req, res) {
    try {
        console.log('Inside BookingService:getServiceById method ')
        const bookingData = await BookingModel.findById({ _id: new mongoose.Types.ObjectId(req.params.id) })
        return {
            status: true,
            data: bookingData,
            message: 'Booking service retrieved succesfully.'
        }

    } catch (error) {
        console.log('Inside BookingService:getServiceById method ', error)

    }
}

module.exports = {
    createNewBooking,
    getAllServices,
    getServiceById
}