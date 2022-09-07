<template>
  <div class="login-dark">
    <form @submit="login" method="post">
      <h2 class="sr-only">Login Form</h2>
      <div class="illustration">
        <i class="icon ion-ios-locked-outline"></i>
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group mt-1">
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block" type="submit">Log In</button>
      </div>
      <a class="forgot mt-3">Forgot your email or password?</a>
    </form>
  </div>
</template>
<script>
// import { Console } from "console";

// import { json } from "body-parser";

export default {
  data: () => {
    return {
      user_email: "",
      user_password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      const api_url = "http://localhost:2121/users/login";
      fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: this.user_email,
          user_password: this.user_password,
        }),
      });
      console.log("working");
    },
  },
};
</script>
<style scoped>
.login-dark form {
  max-width: 350px;
  width: 90%;
  background-color: #1e2833;
  padding: 40px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}

.login-dark .illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 100px;
  color: #2980ef;
}

.login-dark form .form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  /* border-radius: 0; */
  box-shadow: none;
  outline: none;
  color: inherit;
}

.login-dark form .btn-primary {
  background: #214a80;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;
}

.login-dark form .btn-primary:hover,
.login-dark form .btn-primary:active {
  background: #214a80;
  outline: none;
}

.login-dark form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.login-dark form .forgot:hover,
.login-dark form .forgot:active {
  opacity: 1;
  text-decoration: none;
}

.login-dark form .btn-primary:active {
  transform: translateY(1px);
}
</style>
