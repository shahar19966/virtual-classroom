
const express = require('express');
const { getPatients,createPatient,getPatientById,updatePatient,deletePatient } = require('../controllers/patientsController');
const { protect } =require( "../middleware/authMiddleware.js");

const router = express.Router();

//get all patients
router.route('/').get(protect ,getPatients);

//create new patient
router.route('/create').post(protect,createPatient);

// // get/update/delete one patient
router.route('/:id')
    .get(getPatientById)
   .put(protect,updatePatient)
   .delete(protect,deletePatient)


module.exports = router;