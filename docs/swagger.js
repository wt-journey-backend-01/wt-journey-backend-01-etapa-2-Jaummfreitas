const swaggerJsdoc = require('swagger-jsdoc');

const options = {

  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'API do Departamento de Polícia',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de Agentes e Casos.',
    },
    servers: [
      {
        url: 'http://localhost:3000/', 
        description: 'Servidor de Desenvolvimento',
      },
    ],
  },

  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;