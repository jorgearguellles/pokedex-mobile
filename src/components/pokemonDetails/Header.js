import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  const { name, order, type, image } = props;
  const color = getColorByPokemonType(type);

  const bgStyle = [{ backgroundColor: color }, ...styles.bg];

  return (
    <View>
      <View style={bgStyle} />
      <SafeAreaView>
        <View style={styles.imageContainer}>
          <Image source={{ url: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 250,
  },
});
