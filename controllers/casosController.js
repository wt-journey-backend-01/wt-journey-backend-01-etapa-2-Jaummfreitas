const casosRepository = require("../repositories/casosRepository");
const agentesRepository = require("../repositories/agentesRepository");
function getAllCasos(req, res) {

        const casos = casosRepository.findAll()
        res.status(200).json(casos)
};

function getCasoById(req, res) {
        const casoId = req.params.id;
        const caso = casosRepository.findById(casoId);
        if (!caso) {
            return res.status(404).json({ message: "Caso não encontrado"});
        }  
        res.status(200).json(caso);
};

function postCaso(req, res) {
        const data = req.body;
        if (data.id) {
            return res.status(400).json({ message: "Não pode conter ID" });
        }
        if (!data.titulo) {
            return res.status(400).json({ message: "Título é obrigatório" });
        }
        if (!data.descricao) {
            return res.status(400).json({ message: "Descrição é obrigatória" });
        }
        if (!data.status) {
            return res.status(400).json({ message: "Status é obrigatório" });
        }
        if (data.status !== "aberto" && data.status !== "solucionado") {
            return res.status(400).json({ message: "Status deve ser 'aberto' ou 'solucionado'" });
        }
        if (!data.agente_id) {
            return res.status(400).json({ message: "ID do agente é obrigatório" });
        }
        if (!agentesRepository.findById(data.agente_id)) {
            return res.status(404).json({ message: "Agente não encontrado para o ID fornecido" });
        }
        const newCaso = casosRepository.createCaso(data);
        res.status(201).json(newCaso);
};

function putCasoById(req, res) {
        const casoId = req.params.id;
        const caso = casosRepository.findById(casoId);
        if (!caso) {
            return res.status(404).json({ message: "Caso não encontrado"});
        }  

        const data = req.body;
        if (data.id) {
            return res.status(400).json({ message: "Não pode conter ID" });
        }
        if (!data.titulo) {
            return res.status(400).json({ message: "Título é obrigatório" });
        }
        if (!data.descricao) {
            return res.status(400).json({ message: "Descrição é obrigatória" });
        }
        if (!data.status) {
            return res.status(400).json({ message: "Status é obrigatório" });
        }
        if (data.status !== "aberto" && data.status !== "solucionado") {
            return res.status(400).json({ message: "Status deve ser 'aberto' ou 'solucionado'" });
        }
        if (!data.agente_id) {
            return res.status(400).json({ message: "ID do agente é obrigatório" });
        }
        if (!agentesRepository.findById(data.agente_id)) {
            return res.status(404).json({ message: "Agente não encontrado para o ID fornecido" });
        }

        const updatedCaso = casosRepository.updateCaso(casoId, data);
        res.status(200).json(updatedCaso);
};

function patchCasoById(req, res) {
        const casoId = req.params.id;
        const caso = casosRepository.findById(casoId);
        if (!caso) {
            return res.status(404).json({ message: "Caso não encontrado"});
        }  

        const data = req.body;
        if (!data.titulo && !data.descricao && !data.status && !data.agente_id) {
            return res.status(400).json({ message: "Pelo menos um campo deve ser atualizado" });
        }
        if (data.id) {
            return res.status(400).json({ message: "Não pode conter ID" });
        }
        if (data.status && data.status !== "aberto" && data.status !== "solucionado") {
            return res.status(400).json({ message: "Status deve ser 'aberto' ou 'solucionado'" });
        }
        if (data.agente_id && !agentesRepository.findById(data.agente_id)) {
            return res.status(404).json({ message: "Agente não encontrado para o ID fornecido" });
        }
        const updatedCaso = casosRepository.patchCaso(casoId, data);
        res.status(200).json(updatedCaso);
};

function deleteCasoById(req, res) {
        const casoId = req.params.id;
        const caso = casosRepository.findById(casoId);
        if (!caso) {
            return res.status(404).json({ message: "Caso não encontrado"});
        }  

        casosRepository.deleteCaso(casoId);
        res.status(204).send();
};

module.exports = {
   getAllCasos,
   getCasoById,
   postCaso,
   putCasoById,
   patchCasoById,
   deleteCasoById
}