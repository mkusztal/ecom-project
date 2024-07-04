const multer = require("multer");

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    const [name, ext] = file.originalname.split(".");
    cb(null, `${name}-${Date.now()}.${ext}`);
  },
  limits: { filesize: 1000000 },
});

const imageUpload = multer({ storage });
module.exports = imageUpload.single("image");
