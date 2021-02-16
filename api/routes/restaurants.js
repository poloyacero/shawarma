const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/restaurantsController');

router.post('/', restaurantsController.create);

router.get('/', restaurantsController.read);

router.get('/:uid', restaurantsController.readSpecificResto);

router.put('/:uid', restaurantsController.update);

router.delete('/:uid', restaurantsController.delete);

module.exports = router;