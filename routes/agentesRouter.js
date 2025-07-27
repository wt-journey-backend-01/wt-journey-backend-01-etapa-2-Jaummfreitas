const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('/agentes', agentesController.getAllAgentes)

router.get('/agentes/:id', agentesController.getAgenteById)

router.post('/agentes', agentesController.postAgente)

router.put('/agentes/:id', agentesController.putAgenteById)

router.patch('/agentes/:id', agentesController.patchAgenteById)

router.delete('/agentes/:id', agentesController.deleteAgenteById)

module.exports = router