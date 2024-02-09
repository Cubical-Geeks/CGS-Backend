const router = require('express').Router();
const empDetController = require('../Controllers/empDetail.controller');

router.post('/employeeHistory', empDetController.employeeHistory);

module.exports = router;