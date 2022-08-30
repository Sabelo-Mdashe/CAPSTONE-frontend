<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          USERS
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          MOVIES
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          SERIES
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#deals"
          type="button"
          role="tab"
          aria-controls="deals"
          aria-selected="false"
        >
          DEALS
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <i class="fa-solid fa-circle-plus fs-3 mt-3" type="button"></i>
        <table class="table table-dark table-hover mt-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>FULL NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>USER TYPE</th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <i class="fa-solid fa-circle-plus fs-3 mt-3" type="button"></i>
        <table class="table table-dark table-hover mt-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>POSTER</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>GENRE</th>
              <th>BACKGROUND POSTER</th>
              <th>RELEASE DATE</th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <i class="fa-solid fa-circle-plus fs-3 mt-3" type="button"></i>
        <table class="table table-dark table-hover mt-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>POSTER</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>GENRE</th>
              <th>BACKGROUND POSTER</th>
              <th>RELEASE DATE</th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="deals"
        role="tabpanel"
        aria-labelledby="deals-tab"
      >
        <i class="fa-solid fa-circle-plus fs-3 mt-3" type="button"></i>
        <table class="table table-dark table-hover mt-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>POSTER</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>GENRE</th>
              <th>BACKGROUND POSTER</th>
              <th>RELEASE DATE</th>
              <th>COLLECTION PARTS</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
