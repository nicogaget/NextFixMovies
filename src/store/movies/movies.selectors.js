import { createSelector } from "reselect";

export const moviesSelector = (state) => state.movies;

export const moviesisLoadingSelector = createSelector(
  [moviesSelector],
  (movies) => movies.isLoading
);

export const moviesListSelector = createSelector(
  [moviesSelector],
  (movies) => movies.data
);

export const moviesSelectedMovieIndexSelector = createSelector(
  [moviesSelector],
  (movies) => movies.selectedMovie
);
export const moviesSelectedMovieSelector = createSelector(
  [moviesSelector, moviesSelectedMovieIndexSelector],
  (moviesData, index) => moviesData[index]
);