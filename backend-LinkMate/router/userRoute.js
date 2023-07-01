const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/addUser", userController.createUser);
router.get("/allUsers", userController.getAllUser);
router.put("/edit/:id", userController.editUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
