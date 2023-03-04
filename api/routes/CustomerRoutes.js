module.exports = function (app) {
  const CustomerController = require("../controllers/CustomerController");

  app.post("/add_booking", CustomerController.addBooking);
  app.get("/get_places", CustomerController.getPlaces);
};
