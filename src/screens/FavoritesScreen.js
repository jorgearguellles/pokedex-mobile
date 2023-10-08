import { SafeAreaView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getFavoritePokemonAPI } from "../api/favorite";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState(null);
  return (
    <SafeAreaView>
      <Text>FavoritesScreen</Text>
    </SafeAreaView>
  );
}
