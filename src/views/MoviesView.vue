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
</style>
