const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // Limite de 5 requisições por IP
  stantardHeaders: true, // Retorna os cabeçalhos RateLimit
  legacyHeaders: false, // Desativa os cabeçalhos X-RateLimit
  message: {message: 'Muitas requisições. Por favor, tente novamente mais tarde.' },
});