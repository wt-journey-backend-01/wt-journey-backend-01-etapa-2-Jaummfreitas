const casos = [
    {
        id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1" 
    
    },
    {
        id: "7961395c-5549-414d-8da5-3e210c1fd77c",
        titulo: "furto",
        descricao: "Carteira foi furtada às 15:20 do dia 11/07/2007 na região do bairro Centro.",
        status: "fechado",
        agente_id: "5d87a917-71da-4702-b96d-ccf403ec75dd" 
    },
    {
        id: "41190b33-3112-4708-baef-aa24a9538f17",
        titulo: "roubo",
        descricao: "Roubo de veículo às 18:45 do dia 12/07/2007 na região do bairro Jardim.",
        status: "aberto",
        agente_id: "9e35d69e-02e2-4bae-8c37-3170e6ebb32f"
    },
    {
        id: "c2b1f3d4-8e5a-4c9b-8f0c-6d7e8f9a0b2c",
        titulo: "homicidio",
        descricao: "Explosão em residência às 20:15 do dia 13/07/2007 na região do bairro Santa Cruz, resultando na morte de duas pessoas.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    }
]

function findAll() {
    return casos
}
module.exports = {
    findAll
}
