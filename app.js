const http = require('node:http');

function saudacao(nome) {
  return `Olá, ${nome}!`;
}

if (require.main === module) {
  http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(saudacao('turma'));
  }).listen(3000, '0.0.0.0');
}

module.exports = { saudacao };