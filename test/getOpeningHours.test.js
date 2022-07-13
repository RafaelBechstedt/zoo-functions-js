const getOpeningHours = require('../src/getOpeningHours');

const closedPhrase = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função retorna todos dias e horários de funcionamento quando passado nenhum parâmetro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se a função retorna um objeto quando passado parâmetro vazio', () => {
    expect(typeof getOpeningHours()).toBe('object');
  });
  it('Testa se a função retorna uma string quando passado dia e horário corretamente', () => {
    expect(typeof getOpeningHours('Thursday', '10:30-AM')).toBe('string');
  });
  it('Testa se a função retorna "The zoo is open" quando passado dia e horário corretamente AM', () => {
    expect(getOpeningHours('Thursday', '10:30-AM')).toBe('The zoo is open');
  });
  it('Testa se a função retorna "The zoo is open" quando passado dia e horário corretamente PM', () => {
    expect(getOpeningHours('Friday', '03:30-PM')).toBe('The zoo is open');
  });
  it('Testa se a função retorna "The zoo is close" quando passado dia e horário que está fechado AM', () => {
    expect(getOpeningHours('Thursday', '09:30-AM')).toBe(closedPhrase);
  });
  it('Testa se a função retorna "The zoo is close" quando passado dia e horário que está fechado PM', () => {
    expect(getOpeningHours('Wednesday', '09:30-PM')).toBe(closedPhrase);
  });
  it('Testa se a função retorna "The zoo is close" quando passado dia e horário que está fechado', () => {
    expect(getOpeningHours('Monday', '09:30-AM')).toBe(closedPhrase);
  });
  it('Testa se a função é case sansitive', () => {
    expect(getOpeningHours('thursday', '09:30-AM')).toBe(closedPhrase);
  });
  it('Testa quando é passado um dia mas de forma errada', () => {
    expect(() => getOpeningHours('Mon', '09:30-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa quando é passado a abreviação da hora erada', () => {
    expect(() => getOpeningHours('Monday', '09:30')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa quando é passado uma letra no lugar da hora', () => {
    expect(() => getOpeningHours('Monday', 'XX:30-AM')).toThrow('The hour should represent a number');
  });
  it('Testa quando é passado uma letra no lugar dos minutos', () => {
    expect(() => getOpeningHours('Monday', '09:ZZ-AM')).toThrow('The minutes should represent a number');
  });
  it('Testa quando é passado um número maior que o permitido em hora', () => {
    expect(() => getOpeningHours('Monday', '19:30-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa quando é passado um número maior que o permitido em minutos', () => {
    expect(() => getOpeningHours('Monday', '09:80-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
