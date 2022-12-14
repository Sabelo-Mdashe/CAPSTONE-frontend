import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    movies: null,
    movie: null,
    series: null,
  },
  getters: {},
  mutations: {
    setMovies: (state, movies) => {
      state.movies = movies;
    },

    setMovie: (state, movie) => {
      state.movie = movie;
    },

    setSeries: (state, series) => {
      state.series = series;
    },
  },
  actions: {
    getMovies: async (context) => {
      const res = await fetch(
        "https://capstoneprojectbackend.herokuapp.com/movies"
      )
        .then((res) => res.json)
        .then((movies) => {
          console.log(movies);
          context.commit("setMovies", movies);
        });
    },

    getSeries: async (context) => {
      fetch("https://capstoneprojectbackend.herokuapp.com/series")
        .then((res) => res.json)
        .then((series) => context.commit("setSeries", series));
    },
  },
  modules: {},
});

export const SET_MOVIE = (state, movie) => {
  state.movie = movie;
};

export const getMovie = ({ commit }, movie_id) => {
  axios
    .get(`https://capstoneprojectbackend.herokuapp.com/movies/${movie_id}`)
    .then((res) => {
      commit("SET_MOVIE", res.data);
    });
};
