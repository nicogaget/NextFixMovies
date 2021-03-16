import apiFireBaseRequest from "../../conf/api.firebase";

export const REQUEST_FAVORIS = "request favoris";
export const FETCH_MOVIE = "fetch favoris";
export const FETCH_FAVORIS_SUCCESS = "fetch favoris success";
export const FETCH_FAVORIS_ERROR = "fetch favoris error";
export const SET_SELECTED_FAVORIS = "set selected favoris";

export const TRY_ADD_FAVORI = "try add favori";
export const ADD_FAVORI_SUCCESS = " add favori success";
export const ADD_FAVORI_ERROR = "add favori error";

export const TRY_REMOVE_FAVORI = "try remove favori";
export const REMOVE_FAVORI_SUCCESS = " remove favori success";
export const REMOVE_FAVORI_ERROR = "remove favori error";

export const requestFavoris = () => ({
  type: REQUEST_FAVORIS,
});

export const fetchFavorisSuccess = (favoris) => ({
  type: FETCH_FAVORIS_SUCCESS,
  favoris,
});

export const fetchFavorisError = (error) => ({
  type: FETCH_FAVORIS_ERROR,
  error,
});

export const fetchFavoris = () => (dispatch) => {
  dispatch(requestFavoris());
  return apiFireBaseRequest.fetchFavoris().then(
    (favoris) => dispatch(fetchFavorisSuccess(favoris)),
    (error) => dispatch(fetchFavorisError(error))
  );
};

export const addFavoriSuccess = (favoris) => ({
  type: ADD_FAVORI_SUCCESS,
  favoris,
});
export const addFavoriError = (error) => ({
  type: ADD_FAVORI_ERROR,
  error,
});

export const tryAddFavori = (movie) => (dispatch, getState) => {
  const favoris = [...getState().favoris.data, movie];
  return apiFireBaseRequest.saveFavoris(favoris).then(
    () => dispatch(addFavoriSuccess(favoris)),
    (error) => dispatch(addFavoriError(error))
  );
};

export const removeFavoriSuccess = (favoris) => ({
  type: REMOVE_FAVORI_SUCCESS,
  favoris,
});
export const removeFavoriError = (error) => ({
  type: REMOVE_FAVORI_ERROR,
  error,
});

export const tryRemoveFavori = (title) => (dispatch, getState) => {
  // const favoris = [...getState().favoris.data];
  // const index = favoris.findIndex((f) => f.title === title);
  // favoris.splice(index, 1);
  const favoris = getState().favoris.data.filter(f => f.title !== title);
  return apiFireBaseRequest.saveFavoris(favoris).then(
    () => dispatch(removeFavoriSuccess(favoris)),
    (error) => dispatch(removeFavoriError(error))
  );
};
