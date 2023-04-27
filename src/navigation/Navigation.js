import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import AccountScreen from "../screens/AccountScreen";
import PokedexScreen from "../screens/PokedexScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const BottomNavbar = createBottomTabNavigator();

export default function Navigation() {
  return (
    <BottomNavbar.Navigator>
      <BottomNavbar.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <BottomNavbar.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <BottomNavbar.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </BottomNavbar.Navigator>
  );
}

function renderPokeball() {
  return (
    <View style={styles.pokeballContainer}>
      <Image
        style={styles.pokeball}
        source={require("../assets/pokeball.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pokeballContainer: {
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: "black", // iOS only property
    shadowOffset: { width: 4, height: 4 }, // iOS only property
    shadowRadius: 10, // iOS only property
    shadowOpacity: 0.7, // iOS only property
  },
  pokeball: {
    width: 75,
    height: 75,
    top: -15,
  },
});
