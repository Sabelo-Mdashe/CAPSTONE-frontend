<template>
  <div class="container">
    <Admin class="mt-5" />
  </div>
  <Footer />
</template>
<script>
import Admin from "@/components/AdminTable.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Admin,
    Footer,
  },
};
</script>
<style>
body {
  background-color: black;
}
</style>
