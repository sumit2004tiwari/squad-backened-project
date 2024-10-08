const express = require("express")
const propertyController  = require("../controller/property.controller");
const router = express.Router();

// property router
router.post("/property" , propertyController.propertyData);

// room data
router.post("/roomdata/:propertyid" , propertyController.roomData);
router.get("/getRoomdata" , propertyController.getRoomData);
router.post("/updateRoomData/:propertyid/room/:roomid" , propertyController.updateRoom)

module.exports = router;