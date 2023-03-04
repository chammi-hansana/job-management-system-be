const { Booking } = require("../models/BookingModel");
const { Place } = require("../models/PlaceModel");

exports.addBooking = async (req, res) => {
  let newBooking = new Booking(req.body);
  console.log("new booking adding", req.body);

  await newBooking.save((err, booking) => {
    if (err) {
      return res.status(422).json({
        success: false,
        message: "Unable to create Booking!",
        data: err,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "New Booking is created!",
        data: booking,
      });
    }
  });
};

exports.getPlaces = (req, res) => {
  Place.find(function (err, places) {
    if (err) {
      return res.status(422).json({
        success: false,
        message: "Unable to retrieve places!",
        data: err,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Received places!",
      data: places,
    });
  });
};
