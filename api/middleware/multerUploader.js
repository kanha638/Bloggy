const { randomInt } = require("crypto");
const multer = require("multer");
const path = require("path");

const fileStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./files/BlogImages");
  },
  filename: function (req, file, callback) {
    // const name = makeId(15);
    const val = randomInt(100000000000, 20000000000000);
    callback(null, val + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype === "file/jpg" || "file/png" || "file/jpeg") {
    callback(null, true);
  } else {
    callback(new Error("The file must be PDF, Docs or Docx !!"), false);
  }
};

const upload = multer({
  storage: fileStorage,
  limits: {
    fileSize: 1024 * 1024 * 5, //file size limit 5MB
  },
  fileFilter: fileFilter,
});

module.exports = { upload };
