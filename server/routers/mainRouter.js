const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const userRouter = require("./userRouter")

router.use(userRouter)
router.use(authentication);



module.exports = router;