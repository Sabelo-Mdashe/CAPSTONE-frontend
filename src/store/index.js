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
     const res = await fetch("https://capstoneprojectbackend.herokuapp.com/movies")
        .then((res) => res.json)
        .then((movies) => {
          console.log(movies);
          context.commit("setMovies", movies)}
        );
    },

    getMovie: async (context, movie_id) => {
      fetch(`https://capstoneprojectbackend.herokuapp.com/movies/${movie_id}`)
        .then((res) => res.json)
        .then((movie) => context.commit("setMovie", movie));
    },

    getSeries: async (context) => {
      fetch("https://capstoneprojectbackend.herokuapp.com/series")
        .then((res) => res.json)
        .then((series) => context.commit("setSeries", series));
    },
  },
  modules: {},
});
