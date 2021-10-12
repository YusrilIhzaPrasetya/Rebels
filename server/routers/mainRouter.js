const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const userRouter = require("./userRouter")
const dataTableRouter = require("./dataTableRouter")

router.use(userRouter)
router.use(authentication);
router.use(dataTableRouter);



module.exports = router;