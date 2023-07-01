const userListController = require("../controllers/userListController");

const router = require("express").Router();

router.post("/addUserList", userListController.createUserList);
router.get("/allUserList", userListController.getAllUserList);

module.exports = router;
