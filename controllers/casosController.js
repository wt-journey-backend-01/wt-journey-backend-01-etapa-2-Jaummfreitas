const casosRepository = require("../repositories/casosRepository");
function getAllCasos(req, res) {

        const casos = casosRepository.findAll()
        res.status(200).json(casos)
};

function getCasoById(req, res) {
        const casoId = req.params.id;
        const casos = casosRepository.findAll();
        const caso = casos.find(c => c.id === casoId);
        if (!caso) {
            return res.status(404).json({ message: "Caso não encontrado"});
        }  
        res.status(200).json(caso);
};

function postCaso(req, res) {
        const casos = casosRepository.findAll();
        const {id,titulo, descricao, status, agente_id} = req.body;
        if (!id) {
            return res.status(400).json({ message: "ID é obrigatório" });
        }
        if (!titulo) {
            return res.status(400).json({ message: "Título é obrigatório" });
        }
        if (!descricao) {
            return res.status(400).json({ message: "Descrição é obrigatória" });
        }
        if (!status) {
            return res.status(400).json({ message: "Status é obrigatório" });
        }
        if (status !== "aberto" && status !== "fechado") {
            return res.status(400).json({ message: "Status deve ser 'aberto' ou 'fechado'" });
        }
        if (!agente_id) {
            return res.status(400).json({ message: "ID do agente é obrigatório" });
        }
        if (casos.some(c => c.id === id)) {
            return res.status(400).json({ message: "ID já existe" });
        }
        const newCaso = { id, titulo, descricao, status, agente_id };
        casos.push(newCaso);
        res.status(201).json(newCaso);
};

function putCasoById(req, res) {
        const casoId = req.params.id;
        const casos = casosRepository.findAll();
        const caso = casos.find(c => c.id === casoId);
        if (!caso) {
            return res.status(404).json({ message: "Caso não encontrado"});
        }  

        const casoIndex = casos.findIndex(c => c.id === casoId);    
        if (casoIndex === -1) {
            return res.status(404).json({ message: "Caso não encontrado" });
        }

        const {id,titulo, descricao, status, agente_id} = req.body;
        if (!id) {
            return res.status(400).json({ message: "ID é obrigatório" });
        }
        if (!titulo) {
            return res.status(400).json({ message: "Título é obrigatório" });
        }
        if (!descricao) {
            return res.status(400).json({ message: "Descrição é obrigatória" });
        }
        if (!status) {
            return res.status(400).json({ message: "Status é obrigatório" });
        }
        if (status !== "aberto" && status !== "fechado") {
            return res.status(400).json({ message: "Status deve ser 'aberto' ou 'fechado'" });
        }
        if (!agente_id) {
            return res.status(400).json({ message: "ID do agente é obrigatório" });
        }
        if (casos.some(c => c.id === id)) {
            return res.status(400).json({ message: "ID já existe" });
        }

        const newCaso = { id, titulo, descricao, status, agente_id };
        casos[casoIndex] = newCaso;
        res.status(200).json(casos[casoIndex]);
};

function patchCasoById(req, res) {
        const casoId = req.params.id;
        const casos = casosRepository.findAll();
        const caso = casos.find(c => c.id === casoId);
        if (!caso) {
            return res.status(404).json({ message: "Caso não encontrado"});
        }  

        const casoIndex = casos.findIndex(c => c.id === casoId);    
        if (casoIndex === -1) {
            return res.status(404).json({ message: "Caso não encontrado" });
        }

        const {id,titulo, descricao, status, agente_id} = req.body;
        if (!id && !titulo && !descricao && !status && !agente_id) {
            return res.status(400).json({ message: "Pelo menos um campo deve ser atualizado" });
        }
        if (status && status !== "aberto" && status !== "fechado") {
            return res.status(400).json({ message: "Status deve ser 'aberto' ou 'fechado'" });
        }
        if (casos.some(c => c.id === id)) {
            return res.status(400).json({ message: "ID já existe" });
        }
        if(id) {
            casos[casoIndex].id = id;
        }
        if(titulo) {
            casos[casoIndex].titulo = titulo;
        }
        if(descricao) {
            casos[casoIndex].descricao = descricao;
        }
        if(status) {
            casos[casoIndex].status = status;
        }
        if(agente_id) {
            casos[casoIndex].agente_id = agente_id;
        }
    
        res.status(200).json(casos[casoIndex]);
};

function deleteCasoById(req, res) {
        const casos = casosRepository.findAll();
        const casoId = req.params.id;
        const casoIndex = casos.findIndex(c => c.id === casoId);    
        if (casoIndex === -1) {
            return res.status(404).json({ message: "Caso não encontrado" });
        }

        casos.splice(casoIndex,1);
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