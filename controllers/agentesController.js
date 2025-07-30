const agentesRepository = require("../repositories/agentesRepository")
function getAllAgentes(req, res) {

        const agentes = agentesRepository.findAll()
        res.status(200).json(agentes)
}

function getAgenteById(req, res) {
        const agenteId = req.params.id;
        const agentes = agentesRepository.findAll();
        const agente = agentes.find(a => a.id === agenteId);
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado"});
        }  
        res.status(200).json(agente);
};

function postAgente(req, res) {
        const agentes = agentesRepository.findAll();
        const {id, nome, dataDeIncorporacao, cargo} = req.body;
        if (!id) {
            return res.status(400).json({ message: "ID é obrigatório" });
        }
        if (!nome) {
            return res.status(400).json({ message: "Nome é obrigatório" });
        }
        if (!dataDeIncorporacao) {
            return res.status(400).json({ message: "Data de Incorporação é obrigatória" });
        }
        if (dataDeIncorporacao && !/^\d{4}-\d{2}-\d{2}$/.test(dataDeIncorporacao)) {
            return res.status(400).json({ message: "Data de incorporação deve seguir o formato YYYY-MM-DD" });
        }
        if (!cargo) {
            return res.status(400).json({ message: "Cargo é obrigatório" });
        }
        const newAgente = { id, nome, dataDeIncorporacao, cargo};
        agentes.push(newAgente);
        res.status(201).json(newAgente);
};

function putAgenteById(req, res) {
        const agenteId = req.params.id;
        const agentes = agentesRepository.findAll();
        const agente = agentes.find(a => a.id === agenteId);
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado"});
        }  

        const agenteIndex = agentes.findIndex(a => a.id === agenteId);    
        if (agenteIndex === -1) {
            return res.status(404).json({ message: "Agente não encontrado" });
        }

        const {id, nome, dataDeIncorporacao, cargo} = req.body;
        if (!id) {
            return res.status(400).json({ message: "ID é obrigatório" });
        }
        if (!nome) {
            return res.status(400).json({ message: "Nome é obrigatório" });
        }
        if (!dataDeIncorporacao) {
            return res.status(400).json({ message: "Data de Incorporação é obrigatória" });
        }
        if (dataDeIncorporacao && !/^\d{4}-\d{2}-\d{2}$/.test(dataDeIncorporacao)) {
            return res.status(400).json({ message: "Data de incorporação deve seguir o formato YYYY-MM-DD" });
        }
        if (!cargo) {
            return res.status(400).json({ message: "Cargo é obrigatório" });
        }

        const newAgente = { id, nome, dataDeIncorporacao, cargo};
        agentes[agenteIndex] = newAgente;
        res.status(200).json(agentes[agenteIndex]);
};

function patchAgenteById(req, res) {
        const agenteId = req.params.id;
        const agentes = agentesRepository.findAll();
        const agente = agentes.find(a => a.id === agenteId);
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado"});
        }  

        const agenteIndex = agentes.findIndex(a => a.id === agenteId);    
        if (agenteIndex === -1) {
            return res.status(404).json({ message: "Agente não encontrado" });
        }

        const {id,nome, dataDeIncorporacao, cargo} = req.body;
        if (!id && !nome && !dataDeIncorporacao && !cargo) {
            return res.status(400).json({ message: "Pelo menos um campo deve ser atualizado" });
        }
        if (dataDeIncorporacao && !/^\d{4}-\d{2}-\d{2}$/.test(dataDeIncorporacao)) {
            return res.status(400).json({ message: "Data de incorporação deve seguir o formato YYYY-MM-DD" });
        }
        if(id) {
            agentes[agenteIndex].id = id;
        }
        if(nome) {
            agentes[agenteIndex].nome = nome;
        }
        if(dataDeIncorporacao) {
            agentes[agenteIndex].dataDeIncorporacao = dataDeIncorporacao;
        }
        if(cargo) {
            agentes[agenteIndex].cargo = cargo;
        }
    
        res.status(200).json(agentes[agenteIndex]);
};

function deleteAgenteById(req, res) {
        const agentes = agentesRepository.findAll();
        const agenteId = req.params.id;
        const agenteIndex = agentes.findIndex(a => a.id === agenteId);    
        if (agenteIndex === -1) {
            return res.status(404).json({ message: "Agente não encontrado" });
        }

        agentes.splice(agenteIndex,1);
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