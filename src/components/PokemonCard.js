import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { COLORS } from "../utils/constants";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const {
    pokemon: { id, name, order, type, image },
  } = props;

  const pokemonColor = getColorByPokemonType(type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.backGround };

  const gotToPokemon = () => {
    console.log(`Go to Pokemon ${name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={gotToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(name)}</Text>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  backGround: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: `${COLORS.BLACK}`, // iOS only property
    shadowOffset: { width: 2, height: 2 }, // iOS only property
    shadowRadius: 6, // iOS only property
    shadowOpacity: 0.4, // iOS only property
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: `${COLORS.WHITE}`,
    fontSize: 11,
  },
  name: {
    color: `${COLORS.WHITE}`,
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: `${COLORS.BLACK}`, // iOS only property
    shadowOffset: { width: 4, height: 4 }, // iOS only property
    shadowRadius: 10, // iOS only property
    shadowOpacity: 0.7, // iOS only property
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
