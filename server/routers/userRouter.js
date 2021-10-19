const router = require("express").Router();
const userController = require("../controllers/userController");
const user = require("../controllers/user");
const authentication = require("../middlewares/authentication");

router.post("/users/register",userController.registrasi)
router.post("/users/login",userController.login)
router.get("/users",authentication,user.readAll);
router.get("/users/:id",authentication,user.readById);
router.patch("/users/:id",authentication,user.updateUser);
router.delete("/users/:id",user.destroyUser);

module.exports = router