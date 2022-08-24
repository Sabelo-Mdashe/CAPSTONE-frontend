<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid navi d-flex">
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
            <li class="nav-item">
              <a class="nav-link" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Series</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
          </ul>
          <form class="d-flex">
            <i class="fa-solid fa-right-from-bracket pe-3" type="button"></i>
            <i class="fa-solid fa-cart-arrow-down" type="button"></i>
          </form>
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

.navbar-nav {
  display: flex;
  align-items: center !important;
}
</style>
