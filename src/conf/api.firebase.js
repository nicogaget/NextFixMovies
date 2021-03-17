import * as axios from "axios";

export const apiFirebase = axios.create({
  baseURL: "https://dymamovies-ebf7a-default-rtdb.firebaseio.com/",
});


// eslint-disable-next-line
export default {
  fetchFavoris: () =>
    apiFirebase
      .get("favoris.json")
      .then((response) => (response.data ? response.data : [])),
      saveFavoris: favoris=> apiFirebase.put('favoris.json', favoris)
};
