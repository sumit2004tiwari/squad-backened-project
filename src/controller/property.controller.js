const pool = require("../config/db.config");

exports.propertyData = async (req, res) => {
  const { property_name, zip, city, ward, location, street, detail } = req.body;

  try {
    const query =
      "INSERT INTO properties (property_name , zip , city , ward , location , street , detail) VALUES($1 , $2 , $3 , $4, $5 , $6 , $7)";

    await pool.query(query, [
      property_name,
      zip,
      city,
      ward,
      location,
      street,
      detail,
    ]);
    console.log("4>>>>>>>>>");
    return res.status(200).json("data send successfully");
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.roomData = async (req, res) => {
  const propertyId = req.params.propertyid;

  if (!propertyId) {
    return res.status(400).json({ error: "Property ID is required" });
  }

  const {
    room_no,
    room_type,
    room_size_sqm,
    room_size_jou,
    bed,
    rent_history,
    sort_term_daily_rent,
    utility_history,
    
  } = req.body;

  try {
    const query =
      "INSERT INTO room (room_no ,room_type ,room_size_sqm, room_size_jou , bed , rent_history ,sort_term_daily_rent , utility_history , property_id) VALUES($1 , $2 , $3 , $4, $5 , $6 , $7 , $8 , $9)";

    await pool.query(query, [
      room_no,
      room_type,
      room_size_sqm,
      room_size_jou,
      bed,
      rent_history,
      sort_term_daily_rent,
      utility_history,
      propertyId
    ]);

    return res.status(200).json("data send successfully");
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getRoomData = async (req, res) => {
  const query = `select * from room`;
  const rentRoomData = await pool.query(query);
  res.status(200).json({message: rentRoomData , })
};
