<template>
  <div>
    <h2 class="heading">SERIES</h2>
    <SeriesCard />
  </div>
  <Footer />
</template>
<script>
import SeriesCard from "@/components/SeriesCard.vue";
import Footer from "@/components/Footer.vue";
export default { components: { SeriesCard, Footer } };
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
