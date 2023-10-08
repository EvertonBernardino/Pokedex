function convertPokemonTypesToli(pokemonType){
    return pokemonType.map((typeSlot)=> `<li class = "types"> ${typeSlot.type.name}</li>`)
}

function convertPokemonTohtml(pokemon){
    return `
            <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToli(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </div>                
            </li>
        `
}

const pokemonList = document.getElementById(`pokemonList`)

pokeAPI.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonTohtml).join(``)   
})

