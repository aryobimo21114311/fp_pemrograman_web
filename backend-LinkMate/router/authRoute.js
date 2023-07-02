const router = require("express").Router();
const authController = require("../auth/auth");

router.post("/signup", authController.signup);

router.post("/signin", authController.signIn);

router.get("/profile", authController.profile);
router.get("/linkProfile", authController.linkProfile);

router.post("/create-short", authController.createShortLink);
router.get("/linkmate/:url_short", authController.redirectUrl);

router.delete("/logout", authController.logout);

module.exports = router;
