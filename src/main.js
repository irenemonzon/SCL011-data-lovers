const listpokemon = window.POKEMON.pokemon;

// recorrer el array y mostrar imagen, numero y nombre de 151 pokemones

for(let i = 0; i < listpokemon.length; i++){

  //Se crea un contenedor padre en el div root
  let cont = document.getElementById("root");
  // añadir atributos
 
  let contdata= document.createElement("div");
  cont.appendChild(contdata);
  contdata.className ="flex-container";

//se crea el elemento imagen
  let imagenpokemon=document.createElement("img");
  imagenpokemon.src= listpokemon[i].img;

// se crea el elemento numero
  let numpokemon= document.createElement("h3");
  numpokemon.textContent= '#'+listpokemon[i].num;

// se crea el elemento nombre
  let namepokemon= document.createElement("h1");
  namepokemon.textContent= listpokemon[i].name;
  namepokemon.className = "title";

//se crean los elementos hijos en el contenedor padre
 contdata.appendChild(imagenpokemon);
 contdata.appendChild(numpokemon);
 contdata.appendChild(namepokemon);
// se visualiza en HTML

}

// filtrado por tipo
const buttonfilter= document.getElementById("btnType");
buttonfilter.addEventListener('click',()=>{

    let pokemonfilter =listpokemon.filter(element=>{
        return element.type=='Poison';
    })
    
    const showfilterpokemon= document.getElementById("root");

     showfilterpokemon.innerHTML= pokemonfilter.map (element => {
     // return element.spawn_chance;
      return  ` <div class="flex-container">
                 <img src="${element.img}">
                 <h3> # ${element.num}</h3>
                 <h1> ${element.name}</h1>
                 </div>`
             
    }).join("");

    //console.log(showfilterpokemon1);
    //showfilterpokemon1.innerHTML = showfilterpokemon;
});





=======
const pokemonfilter= listpokemon.filter(x => x.type=='Poison' );
console.log(pokemonfilter);
