<template>
  <div class="container d-flex">
    <form @submit="login" class="mt-5 d-flex">
      <label class="mt-5">Email:</label>
      <input
        type="email"
        id="user_email"
        v-model="user_email"
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
// import { Console } from "console";

// import { json } from "body-parser";

export default {
  // data: () => {
  //   return {
  //     user_email: "",
  //     user_password: "",
  //   };
  // },
  // methods: {
  //   login(e) {
  //     e.preventDefault();
  //     const api_url =
  //       "https://capstoneprojectbackend.herokuapp.com/users/login";
  //     fetch(api_url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         user_email: this.user_email,
  //         user_password: this.user_password,
  //       }),
  //     });
  //     console.log("working");
  //   },
  // },
};
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
