const { Router } = require("express");
const Product = require("../models").product;
const Category = require("../models").category;

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const productList = await Product.findAll({ include: Category });
    response.send(productList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const specificProduct = await Product.findByPk(id, { include: Category });
    if (!specificProduct) {
      response.status(404).send("Product not found");
    } else {
      response.send(specificProduct);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
