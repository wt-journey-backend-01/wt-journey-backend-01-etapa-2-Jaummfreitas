const express = require('express')
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('/casos', casosController.getAllCasos)

router.get('/casos/:id', casosController.getCasoById)

router.post('/casos', casosController.postCaso)

router.put('/casos/:id', casosController.putCasoById)

router.patch('/casos/:id', casosController.patchCasoById)

router.delete('/casos/:id', casosController.deleteCasoById)

module.exports = router