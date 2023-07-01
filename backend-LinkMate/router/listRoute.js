const listController = require("../controllers/listController");

const router = require("express").Router();

router.post("/addList", listController.createList);
router.get("/allList", listController.getAllList);
router.get("/linkmate/:url_short", listController.redirectLink);
router.delete("/delete/:id", listController.deleteLink);

module.exports = router;
