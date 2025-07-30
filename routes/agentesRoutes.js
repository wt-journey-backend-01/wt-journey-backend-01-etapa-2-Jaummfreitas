const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('/', agentesController.getAllAgentes)

router.get('/:id', agentesController.getAgenteById)

router.post('/', agentesController.postAgente)

router.put('/:id', agentesController.putAgenteById)

router.patch('/:id', agentesController.patchAgenteById)

router.delete('/:id', agentesController.deleteAgenteById)

module.exports = router