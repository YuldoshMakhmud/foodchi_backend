const router = require('express').Router();
const userController = require('../controllers/userController')
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.get("/verify/:otp", userController.verifyAccount);
router.get("/verify_phone/:phone", userController.verifyPhone);

router.get("/", userController.getUser);
router.delete("/", userController.deleteUser);


router.get("/",verifyTokenAndAuthorization, userController.getUser);


module.exports = router;