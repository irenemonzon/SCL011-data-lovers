
const listpokemon = window.POKEMON.pokemon;

// recorrer el array y mostrar imagen, numero y nombre de 151 pokemones

for(let i = 0; i < listpokemon.length; i++){

  //Se crea un contenedor padre en el div root
  let cont = document.getElementById("root");
  // añadir atributos
 
  let contdata= document.createElement("div");
  cont.appendChild(contdata);
  contdata.className ="alignment";

//se crea el elemento imagen
  let imagenpokemon=document.createElement("img");
  imagenpokemon.src= listpokemon[i].img;

// se crea el elemento numero
  let numpokemon= document.createElement("h3");
  numpokemon.textContent= listpokemon[i].num;

// se crea el elemento nombre
  let namepokemon= document.createElement("h1");
  namepokemon.textContent= listpokemon[i].name;

//se crean los elementos hijos en el contenedor padre
 contdata.appendChild(imagenpokemon);
 contdata.appendChild(numpokemon);
 contdata.appendChild(namepokemon);
// se visualiza en HTML

}

const pokemonfilter= listpokemon.filter(x => x.type=='Poison' );


//for (let i = 0; i < pokemonfilter.length; i++)
//{
  // let filtroName = listpokemon[i].name;
  // console.log(filtroName);
//}



console.log(pokemonfilter);
