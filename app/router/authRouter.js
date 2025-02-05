const express = require('express');
const AuthApiController = require('../controller/AuthApiController');
const { Auth } = require('../middleware/auth');
const router = express.Router();


router.post('/register',AuthApiController.register);
router.post('/login',AuthApiController.login);
router.post('/verify-otp',AuthApiController.verifyOtp)
router.get('/dashboard',Auth,AuthApiController.dashboard);
router.post('/update/password',Auth,AuthApiController.updatePassword);
router.post('/reset-password-link',AuthApiController.resetPasswordLink);
router.post('/reset-password/:id/:token',AuthApiController.resetPassword);




module.exports = router;