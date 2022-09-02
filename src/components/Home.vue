<template>
  <div class="container">
    <div class="movies">
      <h2 class="mt-3">Movies</h2>
      <div class="movie mt-3">
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
              <div class="movie-1 d-flex justify-content-center gap-5">
                <div>
                  <div class="card_albums">
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
                    />
                    <div class="descriptions">
                      <h2>Movie Name</h2>
                      <p>Price</p>
                      <button>Show Movie</button>
                      <button id="add-btn" onclick="addtoCart(${id})">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="card_albums">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMWQ0Mjc5ZjAtZmRjNi00MGY4LWFlNDYtOGVlMjc3YjJiNTk4XkEyXkFqcGdeQXVyMTI3NDk1ODY0._V1_.jpg"
                      />
                      <div class="descriptions">
                        <h3>Movie Name</h3>
                        <p>Price</p>
                        <button>
                          Show Movie
                        </button>
                        <button id="add-btn" onclick="addtoCart(${id})">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BODVlOTMxM2ItYzgxMy00ZGNiLWI0NWUtNDA1YWE0MWU0NGNmXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
                    />
                    <div class="descriptions">
                      <h2>Movie Name</h2>
                      <p>Price</p>
                      <button>Show Movie</button>
                      <button id="add-btn" onclick="addtoCart(${id})">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="movie-1 d-flex justify-content-center gap-5">
                <div>
                  <div class="card_albums">
                    <img
                      src="https://i.pinimg.com/originals/c0/db/bb/c0dbbb67ab2abc8d19444d708f88e87a.jpg"
                    />
                    <div class="descriptions">
                      <h2>Movie Name</h2>
                      <p>Price</p>
                      <button>Show Movie</button>
                      <button id="add-btn" onclick="addtoCart(${id})">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="card_albums">
                      <img
                        src="https://cinesite-media-cloud-production.s3-accelerate.amazonaws.com/2015/05/the-man-from-uncle-poster-1024x1643-528x787.jpg"
                      />
                      <div class="descriptions">
                        <h2>Movie Name</h2>
                        <p>Price</p>
                        <button>
                          Show Movie
                        </button>
                        <button id="add-btn" onclick="addtoCart(${id})">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="https://www.heyuguys.com/images/2011/02/Hanna-Poster.jpg"
                    />
                    <div class="descriptions">
                      <h2>Movie Name</h2>
                      <p>Price</p>
                      <button>Show Movie</button>
                      <button id="add-btn" onclick="addtoCart(${id})">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="carousel-item"
            >
            <div class="movie-1 d-flex justify-content-center gap-5">
                <div>
                  <div class="card_albums">
                    <img
                      src="https://themoviespoiler.com/wp-content/uploads/2019/02/TwilightEclipse2010.jpg"
                    />
                    <div class="descriptions">
                      <h2>Movie Name</h2>
                      <p>Price</p>
                      <button>Show Movie</button>
                      <button id="add-btn" onclick="addtoCart(${id})">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="card_albums">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg"
                      />
                      <div class="descriptions">
                        <h2>Movie Name</h2>
                        <p>Price</p>
                        <button>
                          Show Movie
                        </button>
                        <button id="add-btn" onclick="addtoCart(${id})">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card_albums">
                    <img
                      src="https://images2.vudu.com/poster2/168118-338"
                    />
                    <div class="descriptions">
                      <h2>Movie Name</h2>
                      <p>Price</p>
                      <button>Show Movie</button>
                      <button id="add-btn" onclick="addtoCart(${id})">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    getMovies: fetch("https://capstoneprojectbackend.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => {
        let movies = [];
        movies = data;
        console.log(movies);
        // let html = document.querySelector(".movie");
        // html.innerHTML = `<h1>${movies[0].movie_name}</h1>`
        // let movieContainer = document.querySelector(".movie");
        // movieContainer.innerHTML = "";
        // movies.forEach((movie) => {
        //   let id;
        //   id = movie.movie_id;
        //   movieContainer.innerHTML += `<h4>${movie_name}</h4> `;
        // });
      }),
  },
};
</script>
<style>
h2 {
  color: white;
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
