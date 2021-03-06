import React from "react";
import {MovieList, MovieDetails, SearchBar } from "./components"
import Loading from '../../components/utils/loading'

// eslint-disable-next-line
export default (props) => {
  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      {props.loaded ? (
        <div className="d-flex flex-rom flex-fill pt-4 p-2">
          <MovieList
            movies={props.movies}
            updateSelectedMovie={props.updateSelectedMovie}
            favoris ={props.favoris.map(f => f.title)}
            removeFavori={props.removeFavori}
            addFavori={props.addFavori}
          />
          <MovieDetails movie={props.movies[props.selectedMovie]} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
