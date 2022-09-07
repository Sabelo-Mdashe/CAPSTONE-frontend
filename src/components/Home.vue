<template>
  <div class="container">
    <div class="movies">
      <h2 class="heading">UPCOMING MOVIES</h2>
      <div class="movie">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" style="background: black">
              <div
                class="carousel-comingmovies-1 d-flex justify-content-center gap-5"
              ></div>
            </div>
            <div class="carousel-item">
              <div
                class="carousel-comingmovies-2 d-flex justify-content-center gap-5"
              ></div>
            </div>
            <div class="carousel-item">
              <div
                class="carousel-comingmovies-3 d-flex justify-content-center gap-5"
              ></div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <h2 class="mt-5">MOVIES</h2>
      <div class="movie">
        <div
          id="carouselExampleCaptionsmovies"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsmovies"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsmovies"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsmovies"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" style="background: black">
              <div
                class="carousel-movies-1 d-flex justify-content-center gap-5"
              ></div>
            </div>
            <div class="carousel-item">
              <div
                class="carousel-movies-2 d-flex justify-content-center gap-5"
              ></div>
            </div>
            <div class="carousel-item">
              <div
                class="carousel-movies-3 d-flex justify-content-center gap-5"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-5">SERIES</h2>
      <div class="series">
        <div
          id="carouselExampleCaptionsseries"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsseries"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsseries"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsseries"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" style="background: black">
              <div
                class="carousel-series-1 d-flex justify-content-center gap-5"
              ></div>
            </div>
            <div class="carousel-item">
              <div
                class="carousel-series-2 d-flex justify-content-center gap-5"
              ></div>
            </div>
            <div class="carousel-item">
              <div
                class="carousel-series-3 d-flex justify-content-center gap-5"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Movies: null,
    };
  },
  methods: {
    getComingMovies: fetch(
      "https://capstoneprojectbackend.herokuapp.com/coming"
    )
      .then((res) => res.json())
      .then((data) => {
        let comingmovies = [];
        comingmovies = data;
        console.log(comingmovies);
        comingmovies.length = 9;

        let movieContainer1 = document.querySelector(
          ".carousel-comingmovies-1"
        );
        let movieContainer2 = document.querySelector(
          ".carousel-comingmovies-2"
        );
        let movieContainer3 = document.querySelector(
          ".carousel-comingmovies-3"
        );

        movieContainer1.innerHTML = " ";
        movieContainer1.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[0].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[0].movie_name}</h2>
                      <h4>${comingmovies[0].movie_genre}</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[1].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[1].movie_name}</h2>
                      <h4>${comingmovies[1].movie_genre}</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[2].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[2].movie_name}</h2>
                      <h4>${comingmovies[2].movie_genre}</h4>
                    </div>
                  </div>
                </div>
          `;

        movieContainer2.innerHTML = " ";
        movieContainer2.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[3].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[3].movie_name}</h2>
                      <h4>${comingmovies[3].movie_genre}</h4>

                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[4].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[4].movie_name}</h2>
                      <h4>${comingmovies[4].movie_genre}</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[5].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[5].movie_name}</h2>
                      <h4>${comingmovies[5].movie_genre}</h4>
                    </div>
                  </div>
                </div>
          `;

        movieContainer3.innerHTML = " ";
        movieContainer3.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[6].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[6].movie_name}</h2>
                      <h4>${comingmovies[6].movie_genre}</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[7].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[7].movie_name}</h2>
                      <h4>${comingmovies[7].movie_genre}</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${comingmovies[8].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2 style="color: blue">${comingmovies[8].movie_name}</h2>
                      <h4>${comingmovies[8].movie_genre}</h4>

                    </div>
                  </div>
                </div>
          `;
      }),
    getMovies: fetch("https://capstoneprojectbackend.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => {
        let movies = [];
        movies = data;
        console.log(movies);
        movies.length = 9;
        let id;
        id = movies.movie_id;

        let movieContainer1 = document.querySelector(".carousel-movies-1");
        let movieContainer2 = document.querySelector(".carousel-movies-2");
        let movieContainer3 = document.querySelector(".carousel-movies-3");

        movieContainer1.innerHTML = " ";
        movieContainer1.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${movies[0].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[0].movie_name}</h2>
                      <p>${movies[0].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${movies[1].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[1].movie_name}</h2>
                      <p>${movies[1].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${movies[2].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[2].movie_name}</h2>
                      <p>${movies[2].movie_price}</p>
                      <button>Show Movie</button>

                    </div>
                  </div>
                </div>
          `;

        movieContainer2.innerHTML = " ";
        movieContainer2.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${movies[3].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[3].movie_name}</h2>
                      <p>${movies[3].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${movies[4].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[4].movie_name}</h2>
                      <p>${movies[4].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${movies[5].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[5].movie_name}</h2>
                      <p>${movies[5].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
          `;

        movieContainer3.innerHTML = " ";
        movieContainer3.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${movies[6].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[6].movie_name}</h2>
                      <p>${movies[6].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${movies[7].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[7].movie_name}</h2>
                      <p>${movies[7].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${movies[8].movie_poster}"
                    />
                    <div class="descriptions">
                      <h2>${movies[8].movie_name}</h2>
                      <p>${movies[8].movie_price}</p>
                      <button>Show Movie</button>
                    </div>
                  </div>
                </div>
          `;
      }),
    getSeries: fetch("https://capstoneprojectbackend.herokuapp.com/series")
      .then((res) => res.json())
      .then((data) => {
        let series = [];
        series = data;
        console.log(series);
        series.length = 9;

        let id;
        id = series.series_id;

        let seriesContainer1 = document.querySelector(".carousel-series-1");
        let seriesContainer2 = document.querySelector(".carousel-series-2");
        let seriesContainer3 = document.querySelector(".carousel-series-3");

        seriesContainer1.innerHTML = " ";
        seriesContainer1.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${series[0].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[0].series_name}</h2>
                      <p>${series[0].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${series[1].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[1].series_name}</h2>
                      <p>${series[1].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${series[2].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[2].series_name}</h2>
                      <p>${series[2].series_price}</p>
                      <button>Show Series</button>

                    </div>
                  </div>
                </div>
          `;

        seriesContainer2.innerHTML = " ";
        seriesContainer2.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${series[3].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[3].series_name}</h2>
                      <p>${series[3].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${series[4].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[4].series_name}</h2>
                      <p>${series[4].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${series[5].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[5].series_name}</h2>
                      <p>${series[5].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
          `;

        seriesContainer3.innerHTML = " ";
        seriesContainer3.innerHTML += `
          <div>
                  <div class="card_albums">
                    <img
                      src="${series[6].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[6].series_name}</h2>
                      <p>${series[6].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${series[7].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[7].series_name}</h2>
                      <p>${series[7].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="${series[8].series_poster}"
                    />
                    <div class="descriptions">
                      <h2>${series[8].series_name}</h2>
                      <p>${series[8].series_price}</p>
                      <button>Show Series</button>
                    </div>
                  </div>
                </div>
          `;
      }),
  },
};
</script>
<style>
h2 {
  color: white;
}

.heading {
  margin-top: 100px;
}

body {
  background-color: black;
}

.carousel-item {
  height: 60vh;
  padding: 50px;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.wrapper_albums {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 650px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 100px;
}
.card_albums {
  flex: 1;
  flex-basis: 300px;
  flex-grow: 0;
  height: 340px;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
}
.card_albums img {
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
.descriptions {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
}
.card_albums:hover .descriptions {
  left: 0px;
  transition: all 0.7s ease-in-out;
  clip-path: circle(75%);
}
.card_albums:hover {
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transform: scale(0.97);
}
.card_albums:hover img {
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transform: scale(1.6) rotate(20deg);
  filter: blur(3px);
}
.card_albums h2 {
  letter-spacing: 1px;
  margin: 0px;
}
.card_albums p {
  line-height: 24px;
  height: 70%;
}
.card_albums button {
  width: fit-content;
  height: 40px;
  cursor: pointer;
  border-style: none;
  background-color: #ff3838;
  color: #fff;
  font-size: 15px;
  outline: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;
}
.card_albums button:hover {
  transform: scale(0.95) translateX(-5px);
  transition: all 0.5s ease-in-out;
}
</style>
