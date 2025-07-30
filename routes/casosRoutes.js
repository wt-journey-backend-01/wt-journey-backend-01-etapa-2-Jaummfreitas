const express = require('express')
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('/', casosController.getAllCasos)

router.get('/:id', casosController.getCasoById)

router.post('/', casosController.postCaso)

router.put('/:id', casosController.putCasoById)

router.patch('/:id', casosController.patchCasoById)

router.delete('/:id', casosController.deleteCasoById)

module.exports = router