const express = require('express');
const controller = require('../controllers/blocks');

const router = express.Router({});

router.get('/', controller.getAllBlocks);

module.exports = router;
