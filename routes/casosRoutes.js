const express = require('express')
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('/', casosController.getAllCasos)

router.get('/:id', casosController.getCasoById)

router.post('/', casosController.postCaso)

router.put('/:id', casosController.putCasoById)

router.patch('/:id', casosController.patchCasoById)

router.delete('/:id', casosController.deleteCasoById)

/**
 * @swagger
 * tags:
 *   name: Casos
 *   description: API para gerenciamento de casos policiais
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Caso:
 *       type: object
 *       required:
 *         - titulo
 *         - descricao
 *         - status
 *         - agente_id
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         titulo:
 *           type: string
 *         descricao:
 *           type: string
 *         status:
 *           type: string
 *           enum: [aberto, solucionado]
 *         agente_id:
 *           type: string
 *           format: uuid
 *       example:
 *         id: "cfd686d4-957c-4ca5-85bf-2895ca535569"
 *         titulo: "Investigação de Homicídio"
 *         descricao: "Vítima encontrada em área urbana. Suspeito identificado."
 *         status: "aberto"
 *         agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"

 *     NewCaso:
 *       type: object
 *       required:
 *         - titulo
 *         - descricao
 *         - status
 *         - agente_id
 *       properties:
 *         titulo:
 *           type: string
 *         descricao:
 *           type: string
 *         status:
 *           type: string
 *           enum: [aberto, solucionado]
 *         agente_id:
 *           type: string
 *           format: uuid
 *       example:
 *         titulo: "Investigação de Homicídio"
 *         descricao: "Vítima encontrada em área urbana. Suspeito identificado."
 *         status: "aberto"
 *         agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
 */

/**
 * @swagger
 * /casos:
 *   get:
 *     summary: Retorna a lista de todos os casos, com filtros opcionais
 *     tags: [Casos]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [aberto, solucionado]
 *         description: "Filtra os casos pelo status."
 *       - in: query
 *         name: agente_id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: "Filtra os casos pelo ID do agente responsável."
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: "Busca por uma palavra-chave no título ou na descrição do caso."
 *     responses:
 *       200:
 *         description: "A lista de casos."
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Caso'
 */
router.get('/', casosController.getAllCasos)

/**
 * @swagger
 * /casos/{id}:
 *   get:
 *     summary: Retorna um caso específico pelo ID
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do caso."
 *     responses:
 *       200:
 *         description: "Detalhes do caso."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Caso'
 *       404:
 *         description: "Caso não encontrado."
 */
router.get('/:id', casosController.getCasoById)

/**
 * @swagger
 * /casos:
 *   post:
 *     summary: Cria um novo caso
 *     tags: [Casos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCaso'
 *     responses:
 *       201:
 *         description: "Caso criado com sucesso."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Caso'
 *       400:
 *         description: "Dados inválidos."
 *       404:
 *         description: "Agente responsável não encontrado."
 */
router.post('/', casosController.postCaso)

/**
 * @swagger
 * /casos/{id}:
 *   put:
 *     summary: Atualiza um caso existente por completo
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do caso a ser atualizado."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCaso'
 *     responses:
 *       200:
 *         description: "Caso atualizado com sucesso."
 *       400:
 *         description: "Dados inválidos ou tentativa de alterar o ID."
 *       404:
 *         description: "Caso ou agente não encontrado."
 */
router.put('/:id', casosController.putCasoById)

/**
 * @swagger
 * /casos/{id}:
 *   patch:
 *     summary: Atualiza um caso existente parcialmente
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do caso a ser atualizado."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [aberto, solucionado]
 *               agente_id:
 *                 type: string
 *                 format: uuid
 *             example:
 *               status: "solucionado"
 *     responses:
 *       200:
 *         description: "Caso atualizado com sucesso."
 *       400:
 *         description: "Dados inválidos."
 *       404:
 *         description: "Caso ou agente não encontrado."
 */
router.patch('/:id', casosController.patchCasoById)

/**
 * @swagger
 * /casos/{id}:
 *   delete:
 *     summary: Deleta um caso existente
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do caso a ser deletado."
 *     responses:
 *       204:
 *         description: "Caso deletado com sucesso (sem conteúdo)."
 *       404:
 *         description: "Caso não encontrado."
 */
router.delete('/:id', casosController.deleteCasoById)

module.exports = router;