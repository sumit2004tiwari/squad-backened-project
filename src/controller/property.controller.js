const pool = require("../config/db.config");


exports.propertyData = async (req , res , next)=>{
    // const {property_name , zip , city , ward , location , street , detail } = req.body;
    res.status(200).json({ message : "i am a big data"})
      // try {
      //   const query = 'INSERT INTO properties (property_name , zip , city , ward , location , street , detail) VALUES($1 , $2 , $3 , $4, $5 , $6 , $7)';
      //     await pool.query(query , [property_name , zip , city , ward , location , street , detail])
      //     res.status(200).json("data send successfully")
      // } catch (error) {
      //   console.log(error.stack)
      //   res.status(500).json({
      //       message : "internal server error"
      //   })
      // }
}