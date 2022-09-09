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
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => (this.movies = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style></style>
