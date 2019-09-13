const listpokemon = window.POKEMON.pokemon;

// recorrer el array y mostrar imagen, numero y nombre de 151 pokemones
for(let i = 0; i < listpokemon.length; i++){
    //Se crea un contenedor padre en el div root
      let cont = document.getElementById("root");
    // se crea un div hijo de root y se le da un atributo
      let contdata= document.createElement("div");
      cont.appendChild(contdata);
      contdata.className ="pokemon-info";
   //se crea el elemento imagen
      let imagenpokemon=document.createElement("img");
      imagenpokemon.src= listpokemon[i].img;
   // se crea el elemento numero
      let numpokemon= document.createElement("h3");
      numpokemon.textContent= '#'+listpokemon[i].num;
      numpokemon.className="pokemon-number"
   // se crea el elemento nombre
      let namepokemon= document.createElement("h1");
      namepokemon.textContent= listpokemon[i].name;
      namepokemon.className="pokemon-name"
      
      const modalButton=document.createElement("button");
      modalButton.textContent=("Ver ficha");
   //se crean los elementos hijos en el contenedor padre, para visualizar en HTML
      contdata.appendChild(imagenpokemon);
      contdata.appendChild(numpokemon);
      contdata.appendChild(namepokemon);
      contdata.appendChild(modalButton);
}

/*const showalldata= document.getElementById("root");
let alldatapokemon = listpokemon.map (element => {
   return  `<div id="pokemonInfo" class="pokemon-info">
                 <a href="#" id="pokemonImg" value="data[i].id"><img src="${element.img}"></a>
                 <h3 class="pokemon-number"># ${element.num}</h3>
                 <h1 class= "pokemon-name"> ${element.name}</h1>
              </div>`
             }).join("");
showalldata.innerHTML=alldatapokemon;*/

// filtrado por tipo
document.getElementById("typepokemon").addEventListener("change", showfilter);

function showfilter(){
   //Toma el valor del select
    let typepokemonselect=document.getElementById("typepokemon").value;

    const showfilterpokemon= document.getElementById("root");
    // se recorre cada elemento del objeto y se imprimen en el contenedor de los personajes
    
    let pokemonfilter= window.data.filterpokemon(listpokemon, typepokemonselect); 

    // hacer calculo de porcentaje por tipo
    let pokemoncon=pokemonfilter.length;
    let pokemontotal=listpokemon.length;
    let porcentpokemon =(pokemoncon/pokemontotal)*100;
    let porcentpokemon1 = porcentpokemon.toFixed(2);

    const showstatistics=document.getElementById("statistics");
    showstatistics.innerHTML= "Existen "+ porcentpokemon1 + " % de Pokemons tipo "+ typepokemonselect;

    showfilterpokemon.innerHTML= pokemonfilter.map (element => {
        return  `<div class="pokemon-info">
                      <a href=# id="pokemoncard" ><img  src="${element.img}"></a>
                      <h3 class="pokemon-number"># ${element.num}</h3>
                      <h1 class= "pokemon-name"> ${element.name}</h1>
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
        return  `<div class="pokemon-info">
                 <a href=# id="pokemoncard" ><img  src="${element.img}"></a>
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

   let pokemoncon=weaknessFilter.length;
   let pokemontotal=listpokemon.length;
   let porcentpokemon =(pokemoncon/pokemontotal)*100;
   let porcentpokemon1 = porcentpokemon.toFixed(2);
   const showstatistics=document.getElementById("statistics");
   showstatistics.innerHTML="Existen "+ porcentpokemon1  + " % de pokemons con debilidad "+ weaknessSelect 

 
   weaknessResult.innerHTML= weaknessFilter.map(element =>{
       return `<div class="pokemon-info">
              <a href=# id="pokemoncard"><img src="${element.img}"></a>
              <h3 class = "pokemon-number"># ${element.num}</h3>
              <h1 class="pokemon-name">${element.name}</h1>
              </div>`
              }).join("");
   }

 // boton de regresar    
const returnhome= document.getElementById("return");
returnhome.addEventListener('click',()=>{

    location.reload();

});

