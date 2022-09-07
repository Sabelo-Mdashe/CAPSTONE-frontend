<template>
  <div>
    <h2 class="heading">MOVIES</h2>
    <MovieCard />
  </div>
</template>
<script>
import MovieCard from "../components/MovieCard.vue";
export default {
  components: { MovieCard },
};
</script>
<style>
h2 {
  color: white;
}

.heading {
  margin-top: 100px;
}

html,
body {
  margin: 0;
  background: black;
  font-family: "Montserrat", helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}
</style>
