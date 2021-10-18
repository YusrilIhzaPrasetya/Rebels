const router = require("express").Router();
const dataTableController = require("../controllers/dataTableController");
const authentication = require("../middlewares/authentication");

router.get("/datatable",authentication,dataTableController.getAll)
router.get("/datatable/:dataTableId",authentication,dataTableController.getDetail)
router.post("/datatable",authentication,dataTableController.createDataTable)
router.patch("/datatable/:dataTableId",authentication,dataTableController.updateDataTable)
router.delete("/datatable/:dataTableId",authentication,dataTableController.removeDataTable)


module.exports = router