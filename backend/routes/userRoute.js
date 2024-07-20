const express = require('express');
const { addNewAdmin, loginAdmin, getAllAdmins, getUserProfile, logout } = require('../controllers/userControllers');
const {isAuthenticatedUser} = require('../middleware/auth')
const router = express.Router();

router.route("/create-admin").post(addNewAdmin)

router.route("/login-admin").post(loginAdmin)

router.route("/profile").get(isAuthenticatedUser, getUserProfile)
router.route("/logout").get(logout);
router.route("/get-admins").get(getAllAdmins)


module.exports = router;