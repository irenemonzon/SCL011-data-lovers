const listpokemon= POKEMON.pokemon;

for(let i = 0; i < listpokemon.length; i++){

  const cont = document.getElementById("root");// crear un contenedor

  const imagenpokemon=document.createElement("img");
  imagenpokemon.src= listpokemon[i].img;

  let numpokemon= document.createElement("p");
  numpokemon.textContent= listpokemon[i].num;

  let namepokemon= document.createElement("h2");
  namepokemon.textContent= listpokemon[i].name;

 cont.appendChild(imagenpokemon);
 cont.appendChild(numpokemon);
 cont.appendChild(namepokemon);

 cont.innerHTML;



}