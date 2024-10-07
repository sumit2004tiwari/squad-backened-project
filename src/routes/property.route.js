const express = require("express")
const propertyController  = require("../controller/property.controller");
const router = express.Router();

// property router
router.post("/property" , propertyController.propertyData);
router.post("/roomdata/:propertyid" , propertyController.roomData)
router.get("/getRoomdata" , propertyController.getRoomData)

module.exports = router;