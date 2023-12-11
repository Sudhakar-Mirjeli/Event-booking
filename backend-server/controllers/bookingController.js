const BookingService = require('../services/bokkingService')


async function createNewBooking(req, res) {
    try {
        console.log('Inside BookingController:createNewBooking method ',req.body )
        
        const response = await BookingService.createNewBooking(req, res)
        if (!response) throw new Error('Something went wrong, Please try aftter some time',)
        return  res.status(200).json(response);
    } catch (error) {
        console.log('Inside BookingController:createNewBooking method ', error)

    }
}

async function getAllServices(req, res) {
    try {
        console.log('Inside BookingController:getAllServices method ')
        const response = await BookingService.getAllServices(req, res)
        if (!response) throw new Error('Something went wrong, Please try aftter some time',)
        return res.status(200).json(response);

    } catch (error) {
        console.log('Inside BookingController:getAllServices method ', error)

    }
}

async function getServiceById(req, res) {
    try {
        console.log('Inside BookingController:getServiceById method ')
        const response = await BookingService.getServiceById(req, res)
        if (!response) throw new Error('Something went wrong, Please try aftter some time',)
        return res.status(200).json(response);

    } catch (error) {
        console.log('Inside BookingController:getServiceById method ', error)

    }
}

module.exports={
    createNewBooking,
    getAllServices,
    getServiceById
}