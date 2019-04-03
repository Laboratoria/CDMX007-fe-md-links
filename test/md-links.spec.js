const mdLinks = require('../index.js');


describe('mdLinks', () => {

  it('mdLinks debería ser una función', () => {
      expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks deberia retornar una promesa que resuelve un arreglo de objetos', () => {
  return expect(mdLinks('../README.md')).resolves.toHaveLength(0);
  });

  it('mdLinks deberias retornar un error cualdo se ingresa una ruta no valida', () => {
  return expect(mdLinks('../hola.md')).rejects.toMatch('error')
  });



});
