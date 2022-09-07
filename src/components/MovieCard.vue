<template>
  <div>
    <div class="mt-3 functions fun d-flex container">
      <div class="">
        <label class="fs-5 pe-2">Filter By:</label>
        <select name="filters" id="filters" class="p-1 rounded">
          <option value="default">Select filter</option>
          <option value="genre">Genre</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div class="search">
        <input
          class="form-control me-2 fs-5 p-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </div>
    <div class="movie d-flex gap-5">
      <div v-for="movie in Movies" :key="movie.movie_id">
        <div class="movie_card">
          <div class="info_section">
            <div class="movie_header">
              <img class="locandina" :src="movie.movie_poster" />
              <h3>{{ movie.movie_name }}</h3>
              <p class="type">{{ movie.movie_genre }}</p>
              <p style="color: white">
                {{ movie.movie_rating }} <br />
                IMDb
              </p>

              <h4 class="mt-5 fs-1">R{{ movie.movie_price }}</h4>
              <div class="movie_buttons d-flex gap-5 mt-5 ps-4">
                <router-link
                  :to="{ name: 'movie', params: { id: movie.movie_id } }"
                >
                  <i class="fa-solid fa-circle-info fs-2" type="button"></i>
                </router-link>
                <i class="fa-solid fa-cart-plus fs-2" type="button"></i>
              </div>
            </div>
          </div>
          <div class="blur_back bright_back">
            <img :src="movie.background" class="backgroundImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getMovies");
    this.GetMovies();
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  data() {
    return {
      Movies: null,
    };
  },
  methods: {
    async GetMovies() {
      const res = await fetch(
        "https://capstoneprojectbackend.herokuapp.com/movies"
      );

      const moviesdata = await res.json();
      this.Movies = moviesdata;
      // console.log(this.Movies);
    },

    sortByGenre() {
      console.log("this moviedata is available here");
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
}

.movie {
  flex-wrap: wrap;
  margin: 35px;
}

.backgroundImg {
  height: min-content;
  /* size: cover; */
}

.movie_card {
  position: relative;
  display: block;
  width: 700px;
  height: 350px;
  margin: 35px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
}
.movie_card:hover {
  transform: scale(1.02);
  transition: all 0.4s;
}
.info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_header {
  position: relative;
  padding: 25px;
  height: 40%;
  width: fit-content;
}
h3 {
  color: #fff;
  font-weight: 400;
}
h4 {
  color: #9ac7fa;
  font-weight: 400;
}

.type {
  display: inline-block;
  color: #cee4fd;
  margin-left: 10px;
}
.locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 300px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}

.blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}

.fa-circle-info,
.fa-cart-plus {
  color: white;
}

label {
  color: white;
  font-weight: bold;
}

.functions {
  justify-content: space-between;
  align-content: center;
  justify-items: center;
}

select:hover {
  background: #0d0d0c;
  color: white;
}

@media screen and (min-width: 768px) {
  .movie_header {
    width: 60%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }

  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}

@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .movie_header {
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
}
</style>
