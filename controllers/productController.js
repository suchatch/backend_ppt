const db = require("../models");

// create main Model
const Product = db.product;

// 1. create
exports.createNewProduct = async (req, res) => {
  const { product_id, product_name } = req.body;
  const product_picture = req.files[0].originalname;

  let info = {
    product_id: product_id,
    product_name: product_name,
    product_picture: product_picture,
  };
  try {
    const product = await Product.create(info);
    res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 2. get all
exports.getAllProduct = async (req, res, next) => {
  try {
    const positions = await Product.findAll({});
    res.status(200).json({ positions });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 3. get single
exports.getOneProduct = async (req, res, next) => {
  try {
    let { product_id } = req.params;
    const positions = await Product.findOne({
      where: { product_id: product_id },
    });
    res.status(200).json({ positions });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// // 4. update
exports.updateProduct = async (req, res) => {
  let { product_id } = req.params;
  try {
    const positions = await Product.update(req.body, {
      where: { product_id: product_id },
    });
    res.status(200).send(positions);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// // 5. delete by id
exports.deleteProduct = async (req, res) => {
  let product_id = req.params.product_id;
  try {
    await Product.destroy({ where: { product_id: product_id } });
    res.status(200).send("Positions is deleted !");
  } catch (err) {
    console.log(err);
    next(err);
  }
};
