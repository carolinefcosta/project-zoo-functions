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
  it('Verificando retorno da função com parâmetro location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verificando retorno da função com parâmetro popularity', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Verificando retorno da função com parâmetro availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verificando retorno da função sem parâmetros', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
