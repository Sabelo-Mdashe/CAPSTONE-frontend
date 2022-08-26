<template>
  <div class="movie d-flex"></div>
</template>
<script>
export default {
  data() {},
  methods: {
    getMovies: fetch("http://localhost:2121/movies")
      .then((res) => res.json())
      .then((data) => {
        let movies = [];
        movies = data;
        console.log(movies);
        let movieContainer = document.querySelector(".movie");
        movieContainer.innerHTML = "";
        movies.forEach((movie) => {
          let id;
          id = movie.movie_id;
          movieContainer.innerHTML += `
              <div class="movie_card">
      <div class="info_section">
        <div class="movie_header">
          <img
            class="locandina"
            src="${movie.movie_poster}"
          />
          <h3>${movie.movie_name}</h3>
          <p class="type">${movie.movie_genre}</p>
          <h4 class="mt-5 fs-1">R${movie.movie_price}</h4>
        </div>
      </div>
      <div class="blur_back bright_back" style="background: url(${movie.background}); background-size: cover"></div>
    </div>
          `;
        });
      }),
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
}

html,
body {
  margin: 0;
  background: black;
  font-family: "Montserrat", helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.movie_card {
  position: relative;
  display: block;
  width: 700px;
  height: 350px;
  margin: 50px auto;
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
.minutes {
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.13);
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
.movie_desc {
  padding: 25px;
  height: 50%;
}
.text {
  color: #cfd6e1;
}
.movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}
li:hover {
  transition: color 0.3s;
  color: rgba(255, 255, 255, 0.8);
}
i {
  font-size: 19px;
  cursor: pointer;
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

/* .movie_card{
  box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);
}
  .movie_card:hover{
    box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
  } */
</style>
