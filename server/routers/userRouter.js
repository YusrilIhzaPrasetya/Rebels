const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/users/register",userController.registrasi)
router.post("/users/login",userController.login)

module.exports = router