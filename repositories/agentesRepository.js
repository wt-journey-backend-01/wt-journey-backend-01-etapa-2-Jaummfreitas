const agentes = [
    
{
  id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
  nome: "Rommel Carneiro",
  dataDeIncorporacao: "1992/10/04",
  cargo: "delegado"
},
{
  id: "5d87a917-71da-4702-b96d-ccf403ec75dd",
  nome: "Larissa Oliveira",
  dataDeIncorporacao: "2000/01/05",
  cargo: "investigadora"
},
{
  id: "9e35d69e-02e2-4bae-8c37-3170e6ebb32f",
  nome: "Beatriz Nascimento",
  dataDeIncorporacao: "2004/04/04",
  cargo: "comandante"
}
]

function findAll() {
    return agentes
}
module.exports = {
    findAll
}
