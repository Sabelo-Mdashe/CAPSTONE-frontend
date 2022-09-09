<template>
  <div>
    <h2 class="heading">REGISTER</h2>
    <RegisterForm />
  </div>
  <Footer class="fixed-bottom" />
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";
import Footer from "@/components/Footer.vue";
export default { components: { RegisterForm, Footer } };
</script>
<style>
.heading {
  margin-top: 100px;
}
</style>
