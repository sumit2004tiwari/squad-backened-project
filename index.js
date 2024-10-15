const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');

const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/auth.route");
const propertyRoutes = require("./src/routes/property.route")
const reportRoutes = require("./src/routes/report.route")

const app = express();
app.use(cors({
  origin : "http://localhost:5173"
}));
app.use(cookieParser())
const PORT = 8000;

app.use(bodyParser.json());

// routes defined here 
app.use("/api", authRoutes); 
app.use("/api" , propertyRoutes)
app.use("/api" , reportRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
