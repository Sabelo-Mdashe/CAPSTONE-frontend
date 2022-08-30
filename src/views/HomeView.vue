<template>
  <div class="home">
    <Landing />
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
