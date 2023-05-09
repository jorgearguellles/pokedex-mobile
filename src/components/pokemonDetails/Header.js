import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import { COLORS } from "../../utils/constants";

export default function Header(props) {
  const { name, order, type, image } = props;
  const color = getColorByPokemonType(type);

  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: `${COLORS.WHITE}`,
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: `${COLORS.WHITE}`,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: `${COLORS.BLACK}`, // iOS only property
    shadowOffset: { width: 2, height: 2 }, // iOS only property
    shadowRadius: 20, // iOS only property
    shadowOpacity: 0.6, // iOS only property
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
