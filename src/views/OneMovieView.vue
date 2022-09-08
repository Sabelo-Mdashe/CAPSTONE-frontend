<template>
  <div class="movie">
    <h1>{{ id }}</h1>
    <h2>{{ movie_name }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movie: null,
    };
  },
  props: ["id"],
  mounted() {
    fetch(`https://capstoneprojectbackend.herokuapp.com/movies/${this.id}`, {
      method: "GET",
      // mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => (this.movies = data))
      .catch((err) => console.log(err.message));

    // const res = fetch(
    //   `https://capstoneprojectbackend.herokuapp.com/movies/${id}`
    // );

    // const movie = res.json();
    // this.movie = movie;

    // let container = document.querySelector(".movie");
    // container.innerHTML = `<h1>${movie[0].movie_name}</h1>`;
  },
};

// computed: {
//   movie() {
//     return this.$store.state.movie;
//   },
// },
// mounted() {
// this.$store.dispatch("getMovie", this.id);
// },
// };
</script>
<style></style>
