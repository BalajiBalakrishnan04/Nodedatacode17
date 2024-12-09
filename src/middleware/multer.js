const multer = require("multer");


const storage = multer.diskStorage({
    destination: "src/uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});


const uploads = multer({ storage });

const singleUpload = uploads.single("file");


module.exports = singleUpload;