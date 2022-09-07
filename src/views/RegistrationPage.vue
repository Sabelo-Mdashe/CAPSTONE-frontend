<template>
  <div>
    <h2 class="heading">REGISTER</h2>
    <RegisterForm />
  </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";
export default { components: { RegisterForm } };
</script>
<style>
.heading {
  margin-top: 100px;
}
</style>
