const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica a função sem parâmetro', () => {
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
  it('Verifica a função com os parâmetros ("Monday e 09:00-AM")', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica a função com os parâmetros ("Tuesday e 09:00-AM")', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica a função com os parâmetros ("Wednesday e 09:00-PM")', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verificando a função com exceções', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Verifica a função com exceções toThrowError', () => {
    expect(() => getOpeningHours('Friday', '09:00-WM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica a função com exceções de Error', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Verifica a função com exceções new Error', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Verifica a função com Error, passando parâmetros ("Monday", "15:00-AM")', () => {
    expect(() => getOpeningHours('Monday', '15:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Verifica a função com Error, passando parâmetros ("Tuesday", "09:61-AM")', () => {
    expect(() => getOpeningHours('Tuesday', '09:61-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
