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
        <!-- Button trigger modal -->
        <i
          class="fa-solid fa-circle-plus fs-3 mt-3 btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal0"
        ></i>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal0"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ADD USER</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit="addUser" class="d-flex gap-3 user-form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    v-model="user.full_name"
                  />
                  <input
                    type="email"
                    v-model="user.user_email"
                    placeholder="JaneDoe@gmail.com"
                  />
                  <input
                    type="password"
                    v-model="user.user_password"
                    placeholder="password"
                  />
                  <input
                    type="text"
                    v-model="user_type"
                    placeholder="Admin/User"
                  />
                  <button type="submit">Add Movie</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <table class="table table-dark table-hover mt-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>FULL NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>USER TYPE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody class="users"></tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <!-- Button trigger modal -->
        <i
          class="fa-solid fa-circle-plus fs-3 mt-3 add_movie btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></i>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ADD MOVIE</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit="addMovie" class="d-flex gap-3 movie-form">
                  <input
                    type="text"
                    placeholder="Movie Name"
                    v-model="movie.movie_name"
                  />
                  <textarea
                    v-model="movie.movie_description"
                    placeholder="Movie Description"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Movie Genre"
                    v-model="movie.movie_genre"
                  />
                  <input
                    type="text"
                    placeholder="Poster URL"
                    v-model="movie.movie_poster"
                  />
                  <input type="date" v-model="movie.release_date" />
                  <input
                    type="text"
                    placeholder="Movie Price"
                    v-model="movie.movie_price"
                  />
                  <input
                    type="text"
                    placeholder="Movie Rating"
                    v-model="movie.movie_rating"
                  />
                  <input
                    type="text"
                    placeholder="Background URL"
                    v-model="movie.background"
                  />
                  <button type="submit">Add Movie</button>
                </form>
              </div>
            </div>
          </div>
        </div>

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
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody class="movies"></tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <!-- Button trigger modal -->
        <i
          class="fa-solid fa-circle-plus fs-3 mt-3 btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        ></i>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ADD SERIES</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit="addSeries" class="d-flex gap-3 series-form">
                  <input
                    type="text"
                    placeholder="Series Name"
                    v-model="series.series_name"
                  />
                  <textarea
                    v-model="series.series_description"
                    placeholder="Series Description"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Series Genre"
                    v-model="series.series_genre"
                  />
                  <input
                    type="text"
                    placeholder="Poster URL"
                    v-model="series.series_poster"
                  />
                  <input type="date" v-model="series.release_date" />
                  <input
                    type="text"
                    placeholder="Series Price"
                    v-model="series.series_price"
                  />
                  <input
                    type="text"
                    placeholder="Series Rating"
                    v-model="series.series_rating"
                  />
                  <input
                    type="text"
                    placeholder="Background URL"
                    v-model="series.background"
                  />
                  <button type="submit">Add Series</button>
                </form>
              </div>
            </div>
          </div>
        </div>

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
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody class="series"></tbody>
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
              <th>RELEASE DATE</th>
              <th>COLLECTION PARTS</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody class="deals"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movie: {
        movie_name: null,
        movie_description: null,
        movie_genre: null,
        movie_poster: null,
        release_date: null,
        movie_price: null,
        movie_rating: null,
        background: null,
      },

      series: {
        series_name: null,
        series_description: null,
        series_genre: null,
        series_poster: null,
        release_date: null,
        series_price: null,
        series_rating: null,
        background: null,
      },

      user: {
        user_id: null,
        full_name: null,
        user_email: null,
        user_password: null,
        user_type: null,
      },
    };
  },
  methods: {
    getUsers: fetch("https://capstoneprojectbackend.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        let users = [];
        users = data;
        console.log(users);
        let usersContainer = document.querySelector(".users");
        usersContainer.innerHTML = " ";
        users.forEach((user) => {
          let id;
          id = user.user_id;
          usersContainer.innerHTML += `<tr>
            <td>${user.user_id}</td>
            <td>${user.full_name}</td>
            <td>${user.user_email}</td>
            <td>${user.user_password}</td>
            <td>${user.user_type}</td>
            <td><i class="fa-solid fa-pen-to-square" type="button"></i></td>
            <td><i class="fa-solid fa-trash-can" type="button"></i></td>
            </tr>`;
        });
      }),

    getMovies: fetch("https://capstoneprojectbackend.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => {
        let movies = [];
        movies = data;
        console.log(movies);
        let movieContainer = document.querySelector(".movies");
        movieContainer.innerHTML = " ";
        movies.forEach((movie) => {
          let id;
          id = movie.movie_id;
          movieContainer.innerHTML += `<tr>
            <td>${movie.movie_id}</td>
            <td><img src="${movie.movie_poster}" class="w-25" /></td>
            <td>${movie.movie_name}</td>
            <td>R${movie.movie_price}</td>
            <td>${movie.movie_genre}</td>
            <td><img src="${movie.background}" class="w-25" /></td>
            <td>${movie.release_date}</td>
            <td><i class="fa-solid fa-pen-to-square" type="button"></i></td>
            <td><i class="fa-solid fa-trash-can" type="button"></i></td>
            </tr>`;
        });
      }),

    // GETS AND DISPLAY SERIES IN THE TABLE
    getSeries: fetch("https://capstoneprojectbackend.herokuapp.com/series")
      .then((res) => res.json())
      .then((data) => {
        let series = [];
        series = data;
        console.log(series);
        let seriesContainer = document.querySelector(".series");
        seriesContainer.innerHTML = " ";
        series.forEach((episode) => {
          let id;
          id = episode.series_id;
          seriesContainer.innerHTML += `<tr>
            <td>${episode.series_id}</td>
            <td><img src="${episode.series_poster}" class="w-25" /></td>
            <td>${episode.series_name}</td>
            <td>R${episode.series_price}</td>
            <td>${episode.series_genre}</td>
            <td><img src="${episode.background}" class="w-25" /></td>
            <td>${episode.release_date}</td>
            <td><i class="fa-solid fa-pen-to-square" type="button"></i></td>
            <td><i class="fa-solid fa-trash-can" type="button"></i></td>
            </tr>`;
        });
      }),

    getDeals: fetch("https://capstoneprojectbackend.herokuapp.com/deals")
      .then((res) => res.json())
      .then((data) => {
        let deals = [];
        deals = data;
        console.log(deals);
        let dealsContainer = document.querySelector(".deals");
        dealsContainer.innerHTML = " ";
        deals.forEach((deal) => {
          let id;
          id = deal.movie_id;
          dealsContainer.innerHTML += `<tr>
            <td>${deal.movie_id}</td>
            <td><img src="${deal.movie_poster}" class="w-25" /></td>
            <td>${deal.movie_name}</td>
            <td>R${deal.movie_price}</td>
            <td>${deal.movie_genre}</td>
            <td>${deal.release_date}</td>
            <td>${deal.movie_parts}</td>
            <td><i class="fa-solid fa-pen-to-square" type="button"></i></td>
            <td><i class="fa-solid fa-trash-can" type="button"></i></td>
            </tr>`;
        });
      }),

    // ADDING A MOVIE

    addMovie(e) {
      fetch("https://capstoneprojectbackend.herokuapp.com/movies", {
        method: "POST",
        body: JSON.stringify({
          movie_name: this.movie.movie_name,
          movie_description: this.movie.movie_description,
          movie_genre: this.movie.movie_genre,
          movie_poster: this.movie.movie_poster,
          release_date: this.movie.release_date,
          movie_price: this.movie.movie_price,
          movie_rating: this.movie.movie_rating,
          background: this.movie.background,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      e.preventDefault();
    },

    // ADDING A SERIES

    addSeries(e) {
      fetch("https://capstoneprojectbackend.herokuapp.com/series", {
        method: "POST",
        body: JSON.stringify({
          series_name: this.series.series_name,
          series_description: this.series.series_description,
          series_genre: this.series.series_genre,
          series_poster: this.series.series_poster,
          release_date: this.series.release_date,
          series_price: this.series.series_price,
          series_rating: this.series.series_rating,
          background: this.series.background,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      e.preventDefault();
    },

    // ADDING A USER

    addUser(e) {
      fetch("https://capstoneprojectbackend.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          user_id: this.user.user_id,
          full_name: this.user.full_name,
          user_email: this.user.user_email,
          user_password: this.user.user_password,
          user_type: this.user.user_type,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      e.preventDefault();
    },

    //   TO DELETE A MOVIE
    // *** STILL WORKING ON THE FUNCTIONALITY

    // deleteMovie: (id) => {
    //   fetch("https://capstoneprojectbackend.herokuapp.com/movies/" + id, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json)
    //     .then((data) => {
    //       let movies = [];
    //       movies = data;
    //       console.log(movies);
    //       let id;
    //       id = movies.movie_id;

    //       if (id > -1) {
    //         movies.splice(id, 1);
    //       }
    //       this.getMovies;
    //     });
    // },
  },
};
</script>
<style>
.fa-circle-plus {
  color: white;
}

.movie-form,
.series-form,
.user-form {
  flex-direction: column;
}
</style>
