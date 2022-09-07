<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo.png" alt="website logo" class="logo"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li>
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/movies">Movies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/series">Series</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
          <div>
            <!-- <router-link class="nav-link" to="/admin"
              ><i class="fa-solid fa-user-gear"></i
            ></router-link> -->
            <router-link to="/login">
              <i class="fa-solid fa-right-from-bracket pe-3" type="button"></i>
            </router-link>
            <router-link to="/admin">
              <!-- <i class="fa-solid fa-cart-arrow-down" type="button"></i -->
              <i class="fa-solid fa-user-gear"></i>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
.logo {
  width: 150px;
}

.nav-link {
  text-transform: uppercase;
}

.nav-link:active {
  font-size: small;
  transition: ease-in-out 0.2s;
}
</style>
