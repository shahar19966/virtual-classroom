const express = require('express');
const { registerUser, authUser,updateUserProfile, StartScreening} = require('../controllers/userControllers')
const { protect } =require( "../middleware/authMiddleware.js");

const router = express.Router();

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route("/profile").post(protect, updateUserProfile);
router.route("/startScreening").post(StartScreening);

module.exports = router;