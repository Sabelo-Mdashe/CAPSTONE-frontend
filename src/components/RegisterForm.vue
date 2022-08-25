<template>
  <div class="container">
    <form action="submit" method="post" class="mt-5 d-flex">
      <div class="d-flex gap-5">
        <div class="inputs d-flex">
          <label>First Name:</label>
          <input type="text" id="first_name" v-model="first_name" class="p-1" />
        </div>
        <div class="inputs d-flex">
          <label>Last Name:</label>
          <input type="text" id="last_name" v-model="last_name" class="p-1" />
        </div>
      </div>
      <label class="mt-5">Email:</label>
      <input
        type="email"
        id="user_email"
        v-model="user_emial"
        class="p-1"
        required
      />
      <div class="d-flex gap-5">
        <div class="inputs d-flex">
          <label class="mt-5">Password:</label>
          <input
            type="password"
            id="user_password"
            v-model="user_password"
            class="p-1"
            required
          />
        </div>
        <div class="inputs d-flex">
          <label class="mt-5">Confirm Password:</label>
          <input
            type="password"
            id="user_password"
            v-model="confirm_password"
            class="p-1"
            required
          />
        </div>
      </div>

      <button type="submit" class="bg-primary mt-5 rounded">Register</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style>
form,
.inputs {
  flex-direction: column;
  align-items: flex-start;
}

input {
  width: 250px;
}
</style>
