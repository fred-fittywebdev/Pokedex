import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";
 
export default class PokemonService {
 
  // récuperer un pokemon
  static getPokemons(): Promise<Pokemon[]> {
    return fetch('http://tscript-pokedex.netlify.app/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error))
  }
 
  // Editer un pokemon
  static getPokemon(id: number): Promise<Pokemon|null> {
    return fetch(`http://tscript-pokedex.netlify.app/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error))
  }

  // Mofidier un pokemon
  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://tscript-pokedex.netlify.app/pokemons/${pokemon.id}`, {
      method: 'PUT',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .catch(error => this.handleError(error))
  }

  // Ajout un pokemon
  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    delete pokemon.created
    

    return fetch('http://tscript-pokedex.netlify.app/pokemons', {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .catch(error => this.handleError(error))
  }

  // Supprimer un pokemon
  static deletePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://tscript-pokedex.netlify.app/${pokemon.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .catch(error => this.handleError(error))
  }

  static searchPokemon(term: string): Promise<Pokemon[]> {
    return fetch(`http://tscript-pokedex.netlify.app/pokemons?q=${term}`)
    .then(response => response.json())
    .catch(error => this.handleError(error))
  }
 
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  // gestion des erreurs http grâce a catch
  static handleError(error: Error): void {
      console.error(error)
  }
}