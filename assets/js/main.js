

function convertPokemonTohtml(pokemon){
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="types">grass</li>
                        <li class="types">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>                
            </li>
        `
}

const pokemonList = document.getElementById(`pokemonList`)

pokeAPI.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonTohtml).join(``)   
})

