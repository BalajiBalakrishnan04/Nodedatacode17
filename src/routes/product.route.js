const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");
const { verifyToken } = require("../middleware/authToken");
const singleUpload = require("../middleware/multer");

router.use(verifyToken);

router
  .route("/")
  .post(controller.createProduct)
  .get(controller.getProduct)
  .put(controller.updateProduct)
  .delete(controller.deleteProduct);

router.route("/getProductById").get(controller.getProductById);

module.exports = router;
