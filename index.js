const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/auth.route");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
