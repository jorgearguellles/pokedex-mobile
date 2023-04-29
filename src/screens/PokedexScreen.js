import { Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemons } from "../api/getPokemons";

export default function PokedexScreen() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemons();
      console.log(response);
    } catch (error) {
      console.error("Error try load pokemons:", error);
    }
  };

  return (
    <SafeAreaView>
      <Text>PokedexScreen</Text>
    </SafeAreaView>
  );
}
