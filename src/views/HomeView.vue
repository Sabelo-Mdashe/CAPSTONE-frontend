<template>
  <div class="home">
    <Landing class="mt-5"/>
  </div>
</template>

<!-- <script>
// @ is an alias to /src
import Home from "../components/Home.vue";

export default { components: { Home } };

</script> -->

<script>
// @ is an alias to /src
import Landing from "@/components/Home.vue";

export default {
  components: {
    Landing,
  },
};
</script>

<style>
body {
  background-color: black;
}
</style>
