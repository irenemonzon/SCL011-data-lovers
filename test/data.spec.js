global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');
require('./data.spec.js');

describe('data.filterpokemon', () => {
  const muestra= [{
        "name": "Bulbasaur",
        "type": ["Grass"],
      },
        {
        "name": "Ivysaur",
        "type": ["Poison"],
      }, 
        {
        "name": "Venusaur",
        "type": ["Poison"],
      }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterpokemon, 'function');
  });

  it('debería retornar el objeto  Bulbasaur al filtrar por tipo Grass', () => {
    assert.deepEqual(window.data.filterpokemon(muestra,"Grass"),[{"name": "Bulbasaur","type": ["Grass"]}]
      );
   })
  })

describe('data.filterByWeakness', () => {
  const muestra= [{
        "name": "Bulbasaur",
        "weaknesses":["Fire"]
      },
        {
        "name": "Ivysaur",
        "weaknesses": ["Ice" ]
      }, 
        {
        "name": "Venusaur",
        "weaknesses": ["Flying" ]
      }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterByWeakness, 'function');
  });

  it('debería retornar el objeto  Bulbasaur al filtrar por  debilidad Fire', () => {
    assert.deepEqual(window.data.filterByWeakness(muestra,"Fire"),[{"name": "Bulbasaur","weaknesses":["Fire" ]}]
      );
   });
  }) 

  describe('data.ordenpokemon', () => {
    const muestra= [{
         "name": "Ivysaur"
        },
        {
          "name": "Bulbasaur"
        },
        {
          "name": "Venusaur"
        }
    ]
  
    it('debería ser una función', () => {
      assert.equal(typeof window.data.ordenpokemon, 'function');
    });
  
    it('debería retornar el objeto Bulbasaur, Ivysaur, Venasaur al ordenar por ABC', () => {
      assert.deepEqual(window.data.ordenpokemon(muestra,"ABC"),[{ "name": "Bulbasaur"},{"name":"Ivysaur"},{"name":"Venusaur"}]
        );
     });

     it('debería retornar el objeto Venasaur,Ivysaur, Balbasaur al ordenar por CBA', () => {
      assert.deepEqual(window.data.ordenpokemon(muestra,"CBA"),[{"name":"Venusaur"},{"name":"Ivysaur"},{"name": "Bulbasaur"}]
        );
     });    
    }) 
  
