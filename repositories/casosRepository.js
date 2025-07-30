const casos = [
    {
        id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479" 
    
    },
    {
        id: "a2c4e19d-7f0b-4d55-9b3c-123456789abc",
        titulo: "furto",
        descricao: "Carteira foi furtada às 15:20 do dia 11/07/2007 na região do bairro Centro.",
        status: "fechado",
        agente_id: "d3b07384-d9a6-4a6a-85b1-4c79e4986d33" 
    },
    {
        id: "b3d5f2e0-9a1c-4f88-8d7e-23456789abcd",
        titulo: "roubo",
        descricao: "Roubo de veículo às 18:45 do dia 12/07/2007 na região do bairro Jardim.",
        status: "aberto",
        agente_id: "9f8c2a9d-0b4a-4a8d-8b7a-c0f95f61e0e9"
    },
    {
        id: "c4e6a3f1-0b2d-5e99-9e8f-3456789abcde",
        titulo: "homicidio",
        descricao: "Explosão em residência às 20:15 do dia 13/07/2007 na região do bairro Santa Cruz, resultando na morte de duas pessoas.",
        status: "aberto",
        agente_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
    }
]

function findAll() {
    return casos
}
module.exports = {
    findAll
}
