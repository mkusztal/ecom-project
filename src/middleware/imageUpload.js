const multer = require("multer");
const path = require("path");

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

const checkFileType = (file, cb) => {
  const filetype = /jpeg|jpg|png|gif/;
  const extname = filetype.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetype.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb(null, "Error: Images only!");
  }
};

const imageUpload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});
module.exports = imageUpload.single("image");
