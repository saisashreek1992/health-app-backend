const router = require("express").Router();

const { addPatient } = require('../controllers/patient/patient');

router.post('/add-patient', addPatient);

module.exports = router;