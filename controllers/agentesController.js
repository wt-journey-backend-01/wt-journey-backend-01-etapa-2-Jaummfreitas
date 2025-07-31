const agentesRepository = require("../repositories/agentesRepository")
function getAllAgentes(req, res) {

        const agentes = agentesRepository.findAll()
        res.status(200).json(agentes)
}

function getAgenteById(req, res) {
        const agenteId = req.params.id;
        const agente = agentesRepository.findById(agenteId);
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado"});
        }  
        res.status(200).json(agente);
};

function postAgente(req, res) {
        const data = req.body;
        if (data.id) {
            return res.status(400).json({ message: "Não pode conter ID" });
        }
        if (!data.nome) {
            return res.status(400).json({ message: "Nome é obrigatório" });
        }
        if (!data.dataDeIncorporacao) {
            return res.status(400).json({ message: "Data de Incorporação é obrigatória" });
        }
        if (data.dataDeIncorporacao && !/^\d{4}-\d{2}-\d{2}$/.test(data.dataDeIncorporacao)) {
            return res.status(400).json({ message: "Data de incorporação deve seguir o formato YYYY-MM-DD" });
        }
        if (!data.cargo) {
            return res.status(400).json({ message: "Cargo é obrigatório" });
        }
        
        const newAgente =agentesRepository.createAgente(data);
        res.status(201).json(newAgente);
};

function putAgenteById(req, res) {
        const agenteId = req.params.id;
        const agente = agentesRepository.findById(agenteId);
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado"});
        }  

        const data = req.body;
        if (data.id) {
            return res.status(400).json({ message: "Não pode conter ID" });
        }
        if (!data.nome) {
            return res.status(400).json({ message: "Nome é obrigatório" });
        }
        if (!data.dataDeIncorporacao) {
            return res.status(400).json({ message: "Data de Incorporação é obrigatória" });
        }
        if (data.dataDeIncorporacao && !/^\d{4}-\d{2}-\d{2}$/.test(data.dataDeIncorporacao)) {
            return res.status(400).json({ message: "Data de incorporação deve seguir o formato YYYY-MM-DD" });
        }
        if (!data.cargo) {
            return res.status(400).json({ message: "Cargo é obrigatório" });
        }

        const updatedAgente = agentesRepository.updateAgente(agenteId, data);
        res.status(200).json(updatedAgente);
};

function patchAgenteById(req, res) {
        const agenteId = req.params.id;
        const agente = agentesRepository.findById(agenteId);
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado"});
        }  

        const data = req.body;
        if (!data.nome && !data.dataDeIncorporacao && !data.cargo) {
            return res.status(400).json({ message: "Pelo menos um campo deve ser atualizado" });
        }
        if (data.id) {
            return res.status(400).json({ message: "Não pode conter ID" });
        }
        if (data.dataDeIncorporacao && !/^\d{4}-\d{2}-\d{2}$/.test(data.dataDeIncorporacao)) {
            return res.status(400).json({ message: "Data de incorporação deve seguir o formato YYYY-MM-DD" });
        }
        const updatedAgente = agentesRepository.patchAgente(agenteId, data);
        res.status(200).json(updatedAgente);
};

function deleteAgenteById(req, res) {
        const agenteId = req.params.id;
        const agente = agentesRepository.findById(agenteId);
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado"});
        }  

        agentesRepository.deleteAgente(agenteId);
        res.status(204).send();
};

module.exports = {
   getAllAgentes,
   getAgenteById,
   postAgente,
   putAgenteById,
   patchAgenteById,
   deleteAgenteById
}