module.exports = function (app) {
  const { Auth } = require("../middleware/auth");
  const CustomerController = require("../controllers/CustomerController");

  app.post("/add-job", [Auth], CustomerController.addJob);
  app.get("/get-jobs", [Auth], CustomerController.getJobs);
  app.post("/apply-job", [Auth], CustomerController.applyJob);
  app.get("/get-job-req", [Auth], CustomerController.getJobReq);
  app.put("/update-job-req/:reqId", [Auth], CustomerController.updateJobReq);
};
