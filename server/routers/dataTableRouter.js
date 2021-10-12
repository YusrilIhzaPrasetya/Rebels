const router = require("express").Router();
const dataTableController = require("../controllers/dataTableController");

router.get("/datatable",dataTableController.getAll)
router.get("/datatable/:dataTableId",dataTableController.getDetail)
router.post("/datatable",dataTableController.createDataTable)
router.patch("/datatable/:dataTableId",dataTableController.updateDataTable)
router.delete("/datatable/:dataTableId",dataTableController.removeDataTable)


module.exports = router