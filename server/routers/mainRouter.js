const router = require("express").Router();
const userRouter = require("./userRouter")
const dataTableRouter = require("./dataTableRouter")

router.use(userRouter)
router.use(dataTableRouter)

module.exports = router