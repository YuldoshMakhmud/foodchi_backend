const router = require('express').Router();
const userController = require('../controllers/userController')
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

// OTP bilan verifikatsiya qilish
router.get("/verify/:otp", userController.verifyAccount);

// Telefon raqamini verifikatsiya qilish
router.get("/verify_phone/:phone", userController.verifyPhone);

// Foydalanuvchi ma'lumotlarini olish
router.get("/", verifyTokenAndAuthorization, userController.getUser);

// Foydalanuvchini o'chirish
router.delete("/", verifyTokenAndAuthorization, userController.deleteUser);

module.exports = router;
