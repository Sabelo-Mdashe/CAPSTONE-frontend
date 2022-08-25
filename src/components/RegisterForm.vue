<template>
  <div class="container">
    <form action="submit" method="post" class="mt-5 d-flex">
      <label>Full Name:</label>
      <input type="text" id="full_name" v-model="full_name" class="p-1" />
      <label class="mt-5">Email:</label>
      <input
        type="email"
        id="user_email"
        v-model="user_emial"
        class="p-1"
        required
      />
      <label class="mt-5">Password</label>
      <input
        type="password"
        id="user_password"
        v-model="user_password"
        class="p-1"
        required
      />

      <button type="submit" class="bg-primary mt-5 rounded">Register</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
form {
  flex-direction: column;
  align-items: flex-start;
}

input {
  width: 250px;
}
</style>
