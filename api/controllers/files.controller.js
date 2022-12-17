const path = require("path");
const fs = require("fs");

const getBlogImage = async (req, res) => {
  try {
    const { key } = req.params;

    const readStream = fs.createReadStream(
      `${process.env.FILE_PATH}/BlogImages/${key}`
    );

    readStream.on("open", () => {
      readStream.pipe(res);
    });

    readStream.on("error", (err) => {
      res.status(404).json({ message: "Some Eror Occured" });
    });

    // res.end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getBlogImage };
