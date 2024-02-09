const router = require('express').Router();
const empDetController = require('../Controllers/empDetail.controller');

// posting formdata
router.post('/submit', empDetController.submit);

// fetching formData
router.get('/fetch', empDetController.fetchingFormData)

module.exports = router;