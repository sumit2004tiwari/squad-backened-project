const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sumit2004tiwari@gmail.com",
    pass: "lscw uifo yhur cowt",
  },
});

const sendResetEmail = async (email, resetUrl) => {
  const mailOptions = {
    from: "sumit2004tiwari@gmail.com",
    to: email,
    subject: "Password Reset",
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendResetEmail };
