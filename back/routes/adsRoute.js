const express = require('express')
const router = express.Router();

const adsController = require('../controllers/adsController');

router.get('/', adsController.findAll)
router.post('/', adsController.create)

module.exports = router;