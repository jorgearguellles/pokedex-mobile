import { constants } from "../utils/constants";

export async function getPokemons() {
  try {
    const url = `${constants.API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
