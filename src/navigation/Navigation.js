import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../utils/constants";
import FavoritesNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <View style={pokeballStyles.pokeballContainer}>
      <Image
        style={pokeballStyles.pokeballImage}
        source={require("../assets/pokeball.png")}
      />
    </View>
  );
}

const pokeballStyles = StyleSheet.create({
  pokeballContainer: {
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: `${COLORS.BLACK}`, // iOS only property
    shadowOffset: { width: 4, height: 4 }, // iOS only property
    shadowRadius: 10, // iOS only property
    shadowOpacity: 0.7, // iOS only property
  },
  pokeballImage: {
    width: 75,
    height: 75,
    top: -15,
  },
});
