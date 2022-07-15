const newsControllers = require('../controllers/siteControllers');
const express = require('express');
const router = express.Router();

router.use('/search', newsControllers.search);
router.use('/', newsControllers.home);

module.exports = router;
