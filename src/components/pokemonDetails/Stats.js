import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";
import { COLORS } from "../../utils/constants";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Stats(props) {
  const { stats, type } = props;

  const stylesBar = (num) => {
    const pokemonColor = getColorByPokemonType(type);
    return {
      backgroundColor: pokemonColor,
      width: `${num}%`,
    };
  };

  const stylesNumber = (num) => {
    let color;

    if (num <= 25) {
      color = "#ff3e3e";
    } else if (num > 25 && num < 50) {
      color = "#F08700";
    } else if (num >= 50 && num < 75) {
      color = "#f8bb00";
    } else if (num >= 75) {
      color = "#00ac17";
    }
    return {
      color: color,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.statsBlock}>
          <View style={styles.statsBlock_Title}>
            <Text style={styles.statsBlock_Name}>
              {capitalize(item.stat.name)}
            </Text>
          </View>
          <View style={styles.statsBlock_BarInfo}>
            <Text
              style={[
                styles.statsBlock_BarNumber,
                stylesNumber(item.base_stat),
              ]}
            >
              {item.base_stat}
            </Text>
            <View style={styles.statsBlock_bgBar}>
              <View
                style={[styles.statsBlock_ColorBar, stylesBar(item.base_stat)]}
              ></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  statsBlock: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  statsBlock_Title: {
    width: "30%",
  },
  statsBlock_Name: {
    fontSize: 12,
    color: `${COLORS.GRAY2}`,
  },
  statsBlock_BarInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  statsBlock_BarNumber: {
    width: "12%",
    fontSize: 12,
  },
  statsBlock_bgBar: {
    backgroundColor: `${COLORS.GRAY3}`,
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  statsBlock_ColorBar: {
    height: 5,
    borderRadius: 20,
  },
});
