const shoesControllers = require('../controllers/shoesControllers');
const express = require('express');
const router = express.Router();

router.get('/:slug', shoesControllers.show);

module.exports = router;
