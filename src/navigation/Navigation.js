import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import PokedexScreen from "../screens/PokedexScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const BottomNavbar = createBottomTabNavigator();

export default function Navigation() {
  return (
    <BottomNavbar.Navigator>
      <BottomNavbar.Screen name="Account" component={AccountScreen} />
      <BottomNavbar.Screen name="Pokedex" component={PokedexScreen} />
      <BottomNavbar.Screen name="Favorites" component={FavoritesScreen} />
    </BottomNavbar.Navigator>
  );
}
