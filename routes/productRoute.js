const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  },
});
const upload = multer({ storage, limits: { fileSize: 3000 * 2000 } });
const {
  createNewProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  uploadFiles,
  getPicture
} = require("../controllers/productController");

router
  .route("/")
  .get(getAllProduct)
  .post(upload.array("files"), createNewProduct);

router.get("/showPicture/:file", getPicture)
router.get("/:product_id", getOneProduct);
router.put("/:product_id", updateProduct);
router.delete("/:product_id", deleteProduct);

module.exports = router;
