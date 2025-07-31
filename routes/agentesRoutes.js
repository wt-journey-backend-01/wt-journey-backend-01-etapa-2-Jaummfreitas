const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('/', agentesController.getAllAgentes)

router.get('/:id', agentesController.getAgenteById)

router.post('/', agentesController.postAgente)

router.put('/:id', agentesController.putAgenteById)

router.patch('/:id', agentesController.patchAgenteById)

router.delete('/:id', agentesController.deleteAgenteById)

/**
 * @swagger
 * tags:
 *   name: Agentes
 *   description: "API para gerenciamento de agentes"
 */

/**
* @swagger
* components:
*   schemas:
*     Agente:
*       type: object
*       required:
*         - nome
*         - dataDeIncorporacao
*         - cargo
*       properties:
*         id:
*           type: string
*           format: uuid
*           description: O ID gerado automaticamente para o agente.
*         nome:
*           type: string
*           description: O nome completo do agente.
*         dataDeIncorporacao:
*           type: string
*           format: date
*           description: A data de incorporação do agente (formato YYYY-MM-DD).
*         cargo:
*           type: string
*           description: O cargo do agente.
*       example:
*         id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
*         nome: "Clara Monteiro"
*         dataDeIncorporacao: "2010-05-15" # MUDOU: formato da data
*         cargo: "Delegada Titular"

*     NewAgente:
*       type: object
*       required:
*         - nome
*         - dataDeIncorporacao
*         - cargo
*       properties:
*         nome:
*           type: string
*         dataDeIncorporacao:
*           type: string
*           format: date
*         cargo:
*           type: string
*       example:
*         nome: "Clara Monteiro"
*         dataDeIncorporacao: "2010-05-15" # MUDOU: formato da data
*         cargo: "Delegada Titular"
*/

/**
* @swagger
* /agentes:
*   get:
*     summary: Retorna a lista de todos os agentes
*     tags: [Agentes]
*     parameters:
*       - in: query
*         name: sortBy
*         schema:
*           type: string
*         description: "Campo para ordenação (ex: dataDeIncorporacao)."
*       - in: query
*         name: order
*         schema:
*           type: string
*           enum: [asc, desc]
*         description: "Direção da ordenação (asc para crescente, desc para decrescente)."
*     responses:
*       200:
*         description: "A lista de agentes."
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Agente'
*/
router.get('/', agentesController.getAllAgentes)

/**
 * @swagger
 * /agentes/{id}:
 *   get:
 *     summary: Retorna um agente específico pelo ID
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do agente."
 *     responses:
 *       200:
 *         description: "Detalhes do agente."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agente'
 *       404:
 *         description: "Agente não encontrado."
 */
router.get('/:id', agentesController.getAgenteById)

/**
 * @swagger
 * /agentes:
 *   post:
 *     summary: Cria um novo agente
 *     tags: [Agentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewAgente'
 *     responses:
 *       201:
 *         description: Agente criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agente'
 *       400:
 *         description: "Dados inválidos."
 */
router.post('/', agentesController.postAgente)

/**
 * @swagger
 * /agentes/{id}:
 *   put:
 *     summary: Atualiza um agente existente por completo
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do agente a ser atualizado."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewAgente'
 *     responses:
 *       200:
 *         description: "Agente atualizado com sucesso."
 *       400:
 *         description: "Dados inválidos ou tentativa de alterar o ID."
 *       404:
 *         description: "Agente não encontrado."
 */
router.put('/:id', agentesController.putAgenteById)

/**
 * @swagger
 * /agentes/{id}:
 *   patch:
 *     summary: Atualiza um agente existente parcialmente
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do agente a ser atualizado."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               dataDeIncorporacao:
 *                 type: string
 *                 format: date
 *               cargo:
 *                 type: string
 *             example:
 *               cargo: "Investigador Especial"
 *     responses:
 *       200:
 *         description: "Agente atualizado com sucesso."
 *       400:
 *         description: "Dados inválidos."
 *       404:
 *         description: "Agente não encontrado."
 */
router.patch('/:id', agentesController.patchAgenteById)


/**
 * @swagger
 * /agentes/{id}:
 *   delete:
 *     summary: Deleta um agente existente
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: "O ID do agente a ser deletado."
 *     responses:
 *       204:
 *         description: "Agente deletado com sucesso (sem conteúdo)."
 *       404:
 *         description: "Agente não encontrado."
 */
router.delete('/:id', agentesController.deleteAgenteById)

module.exports = router;