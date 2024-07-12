const express = require('express');
const { addNewAdmin, loginAdmin, getAllAdmins } = require('../controllers/userControllers');
const router = express.Router();

router.route("/create-admin").post(addNewAdmin)

router.route("/login-admin").post(loginAdmin)

router.route("/get-admins").get(getAllAdmins)


module.exports = router;