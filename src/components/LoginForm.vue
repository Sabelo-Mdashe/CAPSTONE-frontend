<template>
  <div class="container d-flex">
    <form action="submit" method="post" class="mt-5 d-flex">
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

      <button type="submit" class="bg-primary mt-5 rounded">Login</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style>
.container {
  justify-content: center;
}

form {
  flex-direction: column;
  align-items: flex-start;
}

input {
  width: 250px;
}
</style>
