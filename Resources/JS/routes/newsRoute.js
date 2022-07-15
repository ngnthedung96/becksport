const newsControllers = require('../controllers/newsControllers');
const express = require('express');
const router = express.Router();

router.get('/more', newsControllers.moreDetail);
router.get('/', newsControllers.index);

module.exports = router;
