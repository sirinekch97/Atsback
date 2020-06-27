const ProductController = require("../Controllers/ProductController");
const router = require("express").Router();
var Request = require("request");
//router.post("/find/:id", ProductController.insert);
router.get("/find/:id", ProductController.find);
router.get("/findall",ProductController.findall);
router.get("/",ProductController.fetch);

module.exports = router;
