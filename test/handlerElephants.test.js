const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função é case sensitive', () => {
    expect(handlerElephants('Names')).toBe(null);
  });
  it('Testa se a função retorna os nomes caso o parâmetro "names" seja chamado', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se a funçao retorna 4 caso parâmetro "count" seja chamado', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se a função retorna 10.5 caso parâmetro "averageAge" seja chamado', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se a função retorna 5 caso parâmetro "popularity" seja chamado', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa se a função retorna NW caso parâmetro "locations" seja chamado', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se a função retorna undefined caso nenhum parâmetro seja chamado', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa se a função retorna ["Friday", "Saturday", "Sunday", "Tuesday"] caso parâmetro "availability" seja chamado', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
