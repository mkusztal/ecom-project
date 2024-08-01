const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });
const nodemailer = require("nodemailer");
// const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  const { name, emailFrom, subject, message } = req.body;

  // valid name
  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Name is required!" });
  }

  if (!subject || subject.trim() === "") {
    return res.status(400).json({ message: "Subject is required!" });
  }

  // valid email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(emailFrom)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid email address!" });
  }

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Message cannot be empty!" });
  }

  const configOptions = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_EMAIL_NAME,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: { ciphers: "SSLv3" },
  };

  const transporter = nodemailer.createTransport(configOptions);

  //   let configOptions = {
  //     to: process.env.EMAIL_NAME,
  //     from: emailFrom, // Override authenticated email
  //     subject: subject,
  //     text: message,
  //     replyTo: emailFrom,
  //   };

  try {
    await transporter.sendMail({
      from: {
        name,
        address: emailFrom,
      },
      to: process.env.GMAIL_EMAIL_NAME,
      replyTo: emailFrom,
      subject: `${emailFrom}- ${subject}`,
      text: message,
    });

    // await sgMail.send(configOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error occurred while sending email:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { sendEmail };
