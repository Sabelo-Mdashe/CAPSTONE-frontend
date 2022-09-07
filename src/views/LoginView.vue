<template>
  <div class="body">
    <h2 class="heading">LOGIN</h2>
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";
export default { components: { LoginForm } };
</script>
<style scoped>
h2 {
  color: white;
}

.heading {
  margin-top: 100px;
}

.body {
  min-height: 86vh;
  background-image: url("https://i.postimg.cc/xTXGszs0/movies-login.jpg");
  background-size: cover;
}
</style>
