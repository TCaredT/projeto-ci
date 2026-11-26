const test = require('node:test');
const assert = require('node:assert/strict');
const { saudacao } = require('./app');

test('deve gerar uma saudação', () => {
  assert.equal(saudacao('Ana'), 'Olá, Ana!');
});

// No terminal:
// npm test