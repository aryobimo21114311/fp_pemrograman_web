const router = require("express").Router();
const authController = require("../auth/auth");

router.get("/signup", authController.signUpPage);
router.post("/signup", authController.signup);

router.get("/signin", authController.signInPage);
router.post("/signin", authController.signIn);

router.get("/profile", authController.profile);
router.get("/linkProfile", authController.linkProfile);

router.delete("/logout", authController.logout);

module.exports = router;
