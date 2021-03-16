import * as axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4",
});
apiMovie.interceptors.request.use((req) => {
  req.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjI2NGE5ZmY1NzkxMGJkMzg3MzFhN2IyZWUwYzA4YSIsInN1YiI6IjVmYjgzNGIwYmNjZjFlMDAzZTMyMDA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yL27aFClbsFut9Ku2YyrXAuzTeUSg7HGc7aAqBUL5T8";
  return req;
});

export const apiMovie;

export const apiMovieMap = (m) => ({
  img: "https://image.tmdb.org/t/p/w500/" + m.poster_path,
  title: m.title,
  descritpion: m.overview,
  details: `${m.release_date} | ${m.vote_average} | ${m.vote_count}`,
});

export default {
  searchMovies: (filter) => {
    const query =
      "?" +
      Object.keys(filter)
        .map((k) => `${k}=${filter[k]}&`)
        .join("");

    return apiMovie
      .get("search/movie" + query)
      .then((response) => response.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
      });
  },
};
