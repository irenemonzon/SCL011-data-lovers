const listpokemon = window.POKEMON.pokemon;

// recorrer el array y mostrar imagen, numero y nombre de 151 pokemones
for(let i = 0; i < listpokemon.length; i++){

  //Se crea un contenedor padre en el div root
  let cont = document.getElementById("root");
  
  // se crea un div hijo de root y se le da un atributo
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

//se crean los elementos hijos en el contenedor padre, para visualizar en HTML
  contdata.appendChild(imagenpokemon);
  contdata.appendChild(numpokemon);
  contdata.appendChild(namepokemon);
 }

// filtrado por tipo
document.getElementById("typepokemon").addEventListener("change", showfilter);

function showfilter(){
   //Toma el valor del select
    let typepokemonselect=document.getElementById("typepokemon").value;

    //se realiza el filtrado y muestra todo el objeto
    let pokemonfilter =listpokemon.filter(element=>{
        
        return element.type == typepokemonselect;
    })
    //se guarda la constante para imprimir el el contenedor root
    const showfilterpokemon= document.getElementById("root");

    // se recorre cada elemento del objeto y se imprimen en el contenedor de los personajes
     let pokemonfilter2= pokemonfilter.map (element => {
      return  `<div class="flex-container">
                    <a href=# id="pokemoncard" ><img  src="${element.img}"></a>
                    <h3># ${element.num}</h3>
                    <h1> ${element.name}</h1>
                 </div>`        
    }).join("");
    showfilterpokemon.innerHTML= pokemonfilter2; 
    } 

    //llamado a la funcion ordenar con select
document.getElementById("ordenpokemon").addEventListener("change",showorden);

function showorden(){

    const showordenpokemon= document.getElementById("root");
    let ordenpokemon1 =document.getElementById("ordenpokemon").value;

// condicion para el ordenado
   if(ordenpokemon1==='ABC'){
    const ordenpokemonup=listpokemon.sort((x,y)=>
    {
        //me retorna -1 si es verdadero, y 1 si es falso y me devuelve el array con los objetos
        return (x.name< y.name)?-1:1

    })
    // se recorre el array para imprimir solo los elementos que se necesita
    let listordenpokemon= ordenpokemonup.map (element => {
        return  `<div class="flex-container">
                      <a href=# id="pokemoncard" ><img  src="${element.img}"></a>
                      <h3># ${element.num}</h3>
                      <h1> ${element.name}</h1>
                   </div>`        
      }).join("");
      showordenpokemon.innerHTML= listordenpokemon;  
   }

   else{
    const ordenpokemondown=listpokemon.sort((x,y)=>
    {
        return (x.name> y.name)?-1:1

    })
    let listordenpokemondown= ordenpokemondown.map (element => {
        return  `<div class="flex-container">
                      <a href=# id="pokemoncard" ><img  src="${element.img}"></a>
                      <h3># ${element.num}</h3>
                      <h1> ${element.name}</h1>
                   </div>`        
      }).join("");
      showordenpokemon.innerHTML= listordenpokemondown;  
   }

   }

     
const returnhome= document.getElementById("return");
returnhome.addEventListener('click',()=>{

    location.reload();

});