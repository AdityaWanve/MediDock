const express = require('express');
const router = express.Router();
const {createPatient} = require('../controllers/patient_controller')

router.post('/create', createPatient);

module.exports = router;
