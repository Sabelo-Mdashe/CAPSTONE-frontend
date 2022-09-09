<template>
  <div class="home">
    <Landing class="mt-5" />
  </div>
  <Footer />
</template>

<!-- <script>
// @ is an alias to /src
import Home from "../components/Home.vue";

export default { components: { Home } };

</script> -->

<script>
// @ is an alias to /src
import Landing from "@/components/Home.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Landing,
    Footer,
  },
};
</script>

<style>
body {
  background-color: black;
}
</style>
