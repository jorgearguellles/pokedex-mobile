import { CONSTANTS } from "../utils/constants";

export async function getPokemonsAPI() {
  try {
    const url = `${CONSTANTS.API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
