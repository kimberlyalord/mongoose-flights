const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/:id/new', ticketsCtrl.new);
router.post('/tickets', ticketsCtrl.create);
router.post('/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;