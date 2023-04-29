import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../utils/constants";

export default function PokemonCard(props) {
  const {
    pokemon: { id, name, order, type, image },
  } = props;

  const gotToPokemon = () => {
    console.log(`Go to Pokemon ${name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={gotToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.backGround}>
            <Text style={styles.number}>#{`${order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{name}</Text>
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
    backgroundColor: "gray",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: `${colors.WHITE}`,
    fontSize: 11,
  },
  name: {
    color: `${colors.WHITE}`,
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  imageContainer: {
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: `${colors.BLACK}`, // iOS only property
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
