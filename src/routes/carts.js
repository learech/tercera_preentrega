const express = require('express')
const router = express.Router()

const { productsInCartController, creatCartController, getCartsController, deleteProductsCartController, deleteProductSelectedCartController, getProductsInCartIdController, getCart } = require('../controllers/carts')

router.get("/carts", getCartsController)
router.get("/carts/:cid", getProductsInCartIdController)
router.post("/carts", creatCartController)
router.put("/carts/:cid/products/:pid", productsInCartController)
router.delete("/carts/:cid",deleteProductsCartController)
router.delete("/carts/:cid/products/:pid", deleteProductSelectedCartController)
router.get("/cartid", getCart)

module.exports = router