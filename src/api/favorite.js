// Async Storage's functions
import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getFavoritePokemonAPI() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    const responseJSON = JSON.parse(response);
    return responseJSON ? responseJSON : [];
  } catch (error) {
    throw error;
  }
}

export async function addFavoritePokemonAPI(id) {
  try {
    const favorites = await getFavoritePokemonAPI();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}
