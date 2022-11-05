const router = require("express").Router();

//router.use('/patients', './patient');
router.use('/doctors', require('./doctor'));
//router.use('/admin', './admin');

module.exports = router;