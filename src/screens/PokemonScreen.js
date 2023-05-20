import { ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsByIdAPI } from "../api/getPokemons";
import Header from "../components/pokemonDetails/Header";
import Type from "../components/pokemonDetails/Type";
import Stats from "../components/pokemonDetails/Stats";

export default function PokemonScreen(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="heart"
          color={"white"}
          size={20}
          style={{ marginRight: 20 }}
          onPress={() => console.log("Add to favorites")}
        />
      ),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color={"white"}
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsByIdAPI(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} type={pokemon.types[0].type.name} />
    </ScrollView>
  );
}
