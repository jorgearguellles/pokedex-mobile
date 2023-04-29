import { SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import { getPokemonsAPI, getPokemonDetailsByUrlAPI } from "../api/getPokemons";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPokemons, setNextPokemons] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const response = await getPokemonsAPI(nextPokemons);
      setNextPokemons(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlAPI(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.id,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error("[PokedexScreen.js][loadPokemons()][Error] ==> ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNextPokemons={nextPokemons}
        isLoading={loading}
      />
    </SafeAreaView>
  );
}
