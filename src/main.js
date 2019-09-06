
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

//se crean los elementos hijos en el contenedor padre
 contdata.appendChild(imagenpokemon);
 contdata.appendChild(numpokemon);
 contdata.appendChild(namepokemon);
// se visualiza en HTML

}

// filtrado por tipo

const buttonfilter= document.getElementById("btnType");
buttonfilter.addEventListener('click',()=>{
//Toma el valor del select
    let typetext=document.getElementById("typepokemon").value;
       
//se realiza el filtrado y muestra todo el objeto
    let pokemonfilter =listpokemon.filter(element=>{
        
        return element.type == typetext;
    })

    //se guarda la constante para imprimir el el contenedor root
    
    const showfilterpokemon= document.getElementById("root");

    // se recorre cada elemento del objeto y se imprimen en el contenedor de los personajes

     showfilterpokemon.innerHTML= pokemonfilter.map (element => {
    
      return  `<div class="flex-container">
                 <img src="${element.img}">
                 <a href=""> # ${element.num}</a>
                 <h1> ${element.name}</h1>
                 </div>`
             
    }).join("");

    
});

const returnhome= document.getElementById("return");
returnhome.addEventListener('click',()=>{

    location.reload();

});



