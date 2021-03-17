import React from "react";
import { connect } from "react-redux";
import Loading from "../../components/utils/loading";
import {
  fetchMovies,
  setSelectedMovie,
  tryAddFavori,
  tryRemoveFavori,
} from "../../store/actions";
import {
  favorisListNameSelector,
  moviesIsLoadingSelector,
  moviesListSelector,
  moviesSelectedMovieSelector,
} from "../../store/selectors";
import { MovieDetails, MovieList, SearchBar } from "./components";
// eslint-disable-next-line
const Films = (props) => {
  return (
    <>
      <SearchBar fetchMovies={props.fetchMovies} />
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-rom flex-fill pt-4 p-2">
          <MovieList
            movies={props.movies}
            updateSelectedMovie={props.setSelectedMovie}
            favoris={props.favorisListName}
            removeFavori={props.tryRemoveFavori}
            addFavori={props.tryAddFavori}
          />
          <MovieDetails movie={props.selectedMovie} />
        </div>
      )}
    </>
  );
};

export default connect(
  (state) => ({
    isLoading: moviesIsLoadingSelector(state),
    movies: moviesListSelector(state),
    favorisListName: favorisListNameSelector(state),
    selectedMovie: moviesSelectedMovieSelector(state),
  }),
  {
    fetchMovies,
    setSelectedMovie,
    tryRemoveFavori,
    tryAddFavori,
  }
)(Films);
