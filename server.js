const express = require('express')
const app = express();
const PORT = 3000;
const casosRouter = require("./routes/casosRoutes")
const agentesRouter = require("./routes/agentesRoutes");
const errorHandler = require('./utils/errorHandler');

app.use(express.json());

app.use('/agentes', agentesRouter);
app.use('/casos', casosRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});