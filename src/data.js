window.data= {

  filterpokemon:(listpokemon,typepokemonselect)=>{
    let pokemonfilter =listpokemon.filter(element=>{
        return element.type.includes(typepokemonselect) ;
    })
        return pokemonfilter;
    }, 

  filterByWeakness:(listpokemon,weaknessSelect)=>{

    let weaknessFilter =listpokemon.filter(element=>{
        return element.weaknesses.includes(weaknessSelect);
      })
        return weaknessFilter;
      }, 

  ordenpokemon:(listpokemon,ordenpokemon1)=>{

  // condicion para el ordenado
  if(ordenpokemon1==='ABC'){
    const ordenpokemonup=listpokemon.sort((x,y)=>
  {
  //me retorna -1 si es verdadero, y 1 si es falso y me devuelve el array con los objetos
  return (x.name< y.name)?-1:1
  })
  // se recorre el array para imprimir solo los elementos que se necesita
    return   ordenpokemonup;   
  }
  
else {
    const ordenpokemondown=listpokemon.sort((x,y)=>
  {
    return (x.name> y.name)?-1:1
  })
          return ordenpokemondown;      
   }

}
}