const pool = require("../config/db.config");
const crypto = require("crypto");
const emailService = require("../utils/email.utils");
const {bcrypt} = require("../utils/bcrypt.utils.js");

exports.registerUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const userExists = await pool.query("SELECT * FROM signup WHERE email = $1", [email]);
    if (userExists.rowCount > 0) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt(password , 10)


    const query = "INSERT INTO signup (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)";
    await pool.query(query, [firstname, lastname, email, hashedPassword]);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration", error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM signup WHERE email = $1 AND password = $2", [email, password]);
    if (result.rowCount > 0) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(409).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login", error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const result = await pool.query("SELECT * FROM signup WHERE email = $1", [email]);
    if (result.rowCount === 0) {
      return res.status(409).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    await pool.query(
      "UPDATE signup SET resetToken = $1, resetToken_expiry = NOW() + INTERVAL '24 hours' WHERE email = $2",
      [resetToken, email]
    );

    const resetUrl = `http://localhost:3000/api/resetPassword/${resetToken}`;
    await emailService.sendResetEmail(email, resetUrl);

    res.status(200).json({ message: "Reset password link sent successfully" });
  } catch (error) {
    console.error("Error during password reset", error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.resetPassword = async (req, res) => {
  const token = req.params.token;
  const { newPassword } = req.body;
  const hasPassword = await bcrypt(newPassword );
  try {
    const user = await pool.query("SELECT * FROM signup WHERE resetToken = $1", [token]);
    if (user.rowCount === 0) {
      return res.status(404).json({ message: "Invalid or expired reset token" });
    }

    await pool.query(
      "UPDATE signup SET password = $1, resetToken = NULL, resetToken_expiry = NULL WHERE resetToken = $2",
      [hasPassword, token]
    );

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password", error);
    res.status(500).json({ message: "Server error" });
  }
};


