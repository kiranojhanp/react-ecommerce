import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png|webp/;
  const extension_name = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = filetypes.test(file.mimetype);

  if (extension_name && mimetype) {
    cb(null, true);
  } else {
    cb("The image is not valid");
  }
};

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
  console.log(req.file.path);
});

export default router;
