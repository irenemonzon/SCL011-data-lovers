const listpokemon = window.POKEMON.pokemon;

const showalldata= document.getElementById("root");
let alldatapokemon = listpokemon.map (element => {
   return  `<div id="pokemonInfo" class="pokemon-info">
                 <a href="#" id="pokemonImg" value="data[i].id"><img src="${element.img}"></a>
                 <h3 class="pokemon-number"># ${element.num}</h3>
                 <h1 class= "pokemon-name"> ${element.name}</h1>
              </div>`
             }).join("");
showalldata.innerHTML=alldatapokemon;

// filtrado por tipo
document.getElementById("typepokemon").addEventListener("change", showfilter);

function showfilter(){
   //Toma el valor del select
    let typepokemonselect=document.getElementById("typepokemon").value;

    const showfilterpokemon= document.getElementById("root");
    // se recorre cada elemento del objeto y se imprimen en el contenedor de los personajes
    
    let pokemonfilter= window.data.filterpokemon(listpokemon, typepokemonselect); 

     showfilterpokemon.innerHTML= pokemonfilter.map (element => {
        return  `<div class="pokemon-info">
                      <a href=# id="pokemonImg" value="id"><img  src="${element.img}"></a>
                      <h3 class="pokemon-number"># ${element.num}</h3>
                      <h1 class="pokemon-name"> ${element.name}</h1>
                   </div>`        
                  }).join("");
    } 

    //llamado a la funcion ordenar con select
document.getElementById("ordenpokemon").addEventListener("change",showorden);

function showorden(){

    const showordenpokemon= document.getElementById("root");
    let ordenpokemon1 =document.getElementById("ordenpokemon").value;
   
    let ordenpokemonup =window.data.ordenpokemon(listpokemon,ordenpokemon1) 

    showordenpokemon.innerHTML= ordenpokemonup.map (element => {
        return  `<div id="pokemonInfo" class="pokemon-info">
                 <a href=# id="pokemonImg" value="id"><img  src="${element.img}"></a>
                 <h3 class="pokemon-number"># ${element.num}</h3>
                 <h1 class="pokemon-name"> ${element.name}</h1>
                 </div>`        
                 }).join(""); 

    let ordenpokemondown = window.data.ordenpokemon(listpokemon,ordenpokemon1) 
    showordenpokemon.innerHTML= ordenpokemondown.map (element => {
        return  `<div class="pokemon-info">
                 <a href=# id="pokemonImg" value="id"><img  src="${element.img}"></a>
                 <h3 class="pokemon-number"># ${element.num}</h3>
                 <h1 class="pokemon-name"> ${element.name}</h1>
                 </div>`        
                 }).join("");
   }

   //Filtrado por Debilidad
   const pokemonWeakness = document.getElementById("pokemonWeakness");
   pokemonWeakness.addEventListener("change", filterByWeakness);

   function filterByWeakness(){
       let weaknessSelect = document.getElementById("pokemonWeakness").value;
       const weaknessResult = document.getElementById("root");
       
   let weaknessFilter = window.data.filterByWeakness(listpokemon,weaknessSelect);
   weaknessResult.innerHTML = weaknessFilter.map(element =>{
       return `<div class="pokemon-info">
              <a href=# id="pokemonImg" value="id"><img src="${element.img}"></a>
              <h3 class="pokemon-number"># ${element.num}</h3>
              <h1 class="pokemon-name">${element.name}</h1>
              </div>`
              }).join("");

   }

 // boton de regresar    
const returnhome= document.getElementById("return");
returnhome.addEventListener('click',()=>{

    location.reload();

});

