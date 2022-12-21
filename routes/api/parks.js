const express = require('express');
const router = express.Router();
// const ensureLoggedIn = require('../../config/ensureLoggedIn');
const parksCtrl = require('../../controllers/api/parks');

router.get('/', parksCtrl.index)

router.post('/', parksCtrl.toggleAdd)

router.get('/wishlist', parksCtrl.wishlistIndex)

module.exports = router;