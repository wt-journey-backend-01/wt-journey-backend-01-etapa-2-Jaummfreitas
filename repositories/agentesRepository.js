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
module.exports = {
    findAll
}
