import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";
import { COLORS, CONSTANTS } from "../utils/constants";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNextPokemons, isLoading } = props;

  const loadMorePokemons = () => {
    loadPokemons();
  };

  const nativeSpinner = isLoading && isNextPokemons && (
    <ActivityIndicator
      size="large"
      style={styles.spinner}
      color={`${COLORS.GRAY}`}
    />
  );

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      // Infinity scroll
      onEndReached={!isLoading && isNextPokemons && loadMorePokemons}
      onEndReachedThreshold={0.2}
      ListFooterComponent={nativeSpinner}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: Platform.OS === CONSTANTS.PLATFORM_ANDROID ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === CONSTANTS.PLATFORM_ANDROID ? 90 : 60,
  },
});
