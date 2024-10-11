const express = require("express");
const monthlyreport = require("../controller/monthlyReport.controller")
const router = express.Router()

router.post("/reportgenerator/property/:propertyid/room/:roomid" , monthlyreport.monthlyreportGenerator)

module.exports = router;    