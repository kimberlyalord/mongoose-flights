var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET index page
router.get('/', flightsCtrl.index);
// GET new flights page
router.get('/new', flightsCtrl.new);
// GET flight details page to show
router.get('/:id', flightsCtrl.show);
// POST flight added by user
router.post('/', flightsCtrl.create);

module.exports = router;