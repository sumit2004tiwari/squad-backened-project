const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/auth.route");
const propertyRoutes = require("./src/routes/property.route")

const app = express();
app.use(cookieParser())
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api" , propertyRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
