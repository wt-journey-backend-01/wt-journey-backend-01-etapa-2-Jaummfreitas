const agentes = [
    
{
  id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  nome: "Rommel Carneiro",
  dataDeIncorporacao: "1992-10-04",
  cargo: "delegado"
},
{
  id: "9f8c2a9d-0b4a-4a8d-8b7a-c0f95f61e0e9",
  nome: "Larissa Oliveira",
  dataDeIncorporacao: "2000-01-05",
  cargo: "investigadora"
},
{
  id: "d3b07384-d9a6-4a6a-85b1-4c79e4986d33",
  nome: "Beatriz Nascimento",
  dataDeIncorporacao: "2004-04-04",
  cargo: "comandante"
}
]

function findAll() {
    return agentes
}

function findById(agenteId) {
    const agentes = agentesRepository.findAll();
    const agente = agentes.find(a => a.id === agenteId);
    return agente;
}

function createAgente(data) {

    const newAgente = {
        id: uuid(),
        ...data
    };
 
    agentes.push(newAgente);
    return newAgente;
}

function updateAgente(agenteId, data) {
    const agentes = agentesRepository.findAll();
    const agenteIndex = agentes.findIndex(a => a.id === agenteId);

    const updatedAgente = {
        ...agentes[agenteIndex],
        ...data
    };

    agentes[agenteIndex] = updatedAgente;
    return updatedAgente;
}

function patchAgente(agenteId, data) {
    const agentes = agentesRepository.findAll();
    const agenteIndex = agentes.findIndex(a => a.id === agenteId);

    const updatedAgente = {
        ...agentes[agenteIndex],
        ...data
    };

    agentes[agenteIndex] = updatedAgente;
    return updatedAgente;
}

function deleteAgente(agenteId) {
    const agentes = agentesRepository.findAll();
    const agenteIndex = agentes.findIndex(a => a.id === agenteId)
    agentes.splice(agenteIndex, 1);
    return; 
}
module.exports = {
    findAll,
    findById,
    createAgente,
    updateAgente,
    patchAgente,
    deleteAgente
}
