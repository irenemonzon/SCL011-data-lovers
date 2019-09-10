global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');
require('./data.spec.js');

describe('data.filterpokemon', () => {
  const muestra= [{
        "name": "Bulbasaur",
        "type": ["Grass"]
      },
        {
        "name": "Ivysaur",
        "type": ["Poison"]
      }, 
        {
        "name": "Venusaur",
        "type": ["Poison"]   
      }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterpokemon, 'function');
  });

  it('debería retornar el objeto  Bulbasaur al filtrar por Grass', () => {
    assert.deepEqual(window.data.filterpokemon(muestra,"Grass"),[{
      "name": "Bulbasaur","type": ["Grass"]}]
      );
   })
})
  

  

