<template>
  <div>
    <h2 class="mt-5">SERIES</h2>
    <SeriesCard />
  </div>
</template>
<script>
import SeriesCard from "@/components/SeriesCard.vue";
export default { components: { SeriesCard } };
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
