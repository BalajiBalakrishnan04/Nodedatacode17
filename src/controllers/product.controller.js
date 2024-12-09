const product = require("../models/product.model");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    // let { user, body, file } = req
    // let productData = {
    //     ...body,
    //     userId: user.userId
    // };
    // if (file) {
    //     productData = {
    //         ...productData,
    //         ...file
    //     }
    // }
    const saveProduct = await product.create(req.body);
    res.json({ saveProduct, message: "Product created successfully" });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    // let { user } = req;
    const findProduct = await product.find();
    if (findProduct.length === 0)
      return res.status(404).json({ message: "Data Not Found." });
    res.json(findProduct);
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    let { objectId } = req.query;
    const findProduct = await product.findById(objectId);
    if (!findProduct)
      return res.status(404).json({ message: "Data Not Found" });
    res.json(findProduct);
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    let { objectid } = req.query;
    let newFile = req.file;
    let data = {
      ...req.body,
    };
    if (newFile) {
      data = {
        ...data,
        ...newFile,
      };
    }
    const update = await product.findById(objectid);
    if (!update) return res.status(404).json({ message: "Data Not Fount" });
    if (update.destination) {
      fs.unlinkSync(`${update.destination}/${update.filename}`);
    }
    const updateNewData = await product.findByIdAndUpdate(objectid, data, {
      new: true,
    });
    res.json({message:"Product updated successfully"});
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let { objId } = req.query;
    // const deleteProduct = await product.findById(objectid);
    // if (!deleteProduct) return res.status(404).json({ message: "Data Not Found" });
    // if (deleteProduct.destination) {
    //     fs.unlinkSync(`${deleteProduct.destination}/${deleteProduct.filename}`)
    // }
    // await deleteProduct.deleteOne();
    const deletedProduct = await product.findByIdAndDelete(objId);
    res.json({ deletedProduct, message: "Product deleted successfully" });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
