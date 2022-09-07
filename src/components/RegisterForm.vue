<template>
  <div class="container">
    <div class="register-dark">
      <form @submit="register" method="post" class="mt-5">
        <h2 class="sr-only">Login Form</h2>
        <div class="illustration">
          <i class="icon ion-ios-locked-outline"></i>
        </div>
        <div class="form-group">
          <div class="inputs d-flex">
            <label>Full Name:</label>
            <input
              type="text"
              id="first_name"
              v-model="user.full_name"
              class="p-1 form-control"
            />
          </div>
        </div>
        <div class="form-group mt-1">
          <div class="inputs d-flex">
            <label class="mt-5 email">Email:</label>
            <input
              type="email"
              id="user_email"
              v-model="user.user_email"
              class="p-1 form-control"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <div class="inputs d-flex">
            <label class="mt-5 passwords">Password:</label>
            <input
              type="password"
              id="user_password"
              v-model="user.user_password"
              class="p-1 form-control"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Register</button>
      </form>
    </div>
    <!-- <form @submit="register" method="post" class="mt-5 d-flex">
      <div class="d-flex gap-5">
        <div class="inputs d-flex">
          <label>Full Name:</label>
          <input
            type="text"
            id="first_name"
            v-model="user.full_name"
            class="p-1"
          />
        </div>
        <div class="inputs d-flex">
          <label>Last Name:</label>
          <input type="text" id="last_name" v-model="last_name" class="p-1" />
        </div> -->
    <!-- </div>
      <label class="mt-5 email">Email:</label>
      <input
        type="email"
        id="user_email"
        v-model="user.user_email"
        class="p-1"
        required
      /> -->
    <!-- <div class="d-flex gap-5 passwords">
        <div class="inputs d-flex">
          <label class="mt-5 passwords">Password:</label>
          <input
            type="password"
            id="user_password"
            v-model="user.user_password"
            class="p-1"
            required
          />
        </div> -->
    <!-- <div class="inputs d-flex">
          <label class="mt-5 confirm">Confirm Password:</label>
          <input
            type="password"
            id="user_password"
            v-model="password_second"
            class="p-1"
            required
          />
        </div> -->
    <!-- </div>

      <button type="submit" class="bg-primary mt-5 rounded">Register</button>
    </form> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // first_name: null,
      // last_name: null,
      // password_first: null,
      // password_second: null,
      user: {
        full_name: null,
        user_email: null,
        user_password: null,
        user_type: "user",
      },
    };
  },
  methods: {
    register(e) {
      console.warn(this.user);
      fetch("https://capstoneprojectbackend.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          full_name: this.user.full_name,
          user_email: this.user.user_email,
          user_password: this.user.user_password,
          user_type: this.user.user_type,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
form,
.inputs {
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  align-items: center;
}

input {
  width: 250px;
}

.register-dark form {
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

.register-dark .illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 100px;
  color: #2980ef;
}

.register-dark form .form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  /* border-radius: 0; */
  box-shadow: none;
  outline: none;
  color: inherit;
}

.register-dark form .btn-primary {
  background: #214a80;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;
}

.register-dark form .btn-primary:hover,
.register-dark form .btn-primary:active {
  background: #214a80;
  outline: none;
}

.register-dark form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.register-dark form .forgot:hover,
.register-dark form .forgot:active {
  opacity: 1;
  text-decoration: none;
}

.register-dark form .btn-primary:active {
  transform: translateY(1px);
}

/* MOBILE RESPONSIVENESS
MEDIA QUERIES*/

@media screen and (max-width: 415px) {
  .gap-5 {
    flex-direction: column;
    gap: 10px !important;
  }

  .passwords {
    margin-top: 0.5rem !important;
  }

  .email {
    margin-top: 1rem !important;
  }

  .confirm {
    margin-top: 0rem !important;
  }
}
</style>
