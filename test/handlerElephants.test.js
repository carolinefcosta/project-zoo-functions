const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verificando retorno da função com parâmetro names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verificando retorno da função com parâmetro average', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
