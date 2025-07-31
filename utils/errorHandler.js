function errorHandler(err, req, res, next) {
  console.error(err.stack);

  if (err.type === 'validation') {
      return res.status(400).json({
          message: err.message ||'Dados inválidos'
      });
  }

  if (err.type === 'not_found') {
      return res.status(404).json({
          message: err.message || 'Recurso não encontrado'
      });
  }

 
  res.status(500).json({
      message: 'Erro interno do servidor'
  });
}

module.exports = errorHandler;