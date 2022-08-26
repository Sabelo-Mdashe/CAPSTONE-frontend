<template>
  <div>
    <h2 class="mt-5">MOVIES</h2>
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

html,
body {
  margin: 0;
  background: black;
  font-family: "Montserrat", helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}
</style>
