const express = require('express')
const app = express();
const PORT = 3000;
const casosRouter = require("./routes/casosRouter")
const agentesRouter = require("./routes/agentesRouter");

app.use(express.json());

app.use(casosRouter);
app.use(agentesRouter);

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});