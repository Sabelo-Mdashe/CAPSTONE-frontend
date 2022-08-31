<template>
  <div>
    <div class="mt-3 functions fun d-flex container">
      <div class="pt-3">
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
    <div class="series d-flex"></div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    getSeries: fetch("https://capstoneprojectbackend.herokuapp.com/series")
      .then((res) => res.json())
      .then((data) => {
        let series = [];
        series = data;
        console.log(series);
        let movieContainer = document.querySelector(".series");
        movieContainer.innerHTML = "";
        series.forEach((episode) => {
          let id;
          id = episode.series_id;
          movieContainer.innerHTML += `
              <div class="series_card">
      <div class="info_section">
        <div class="series_header">
          <img
            class="locandina"
            src="${episode.series_poster}"
          />
          <h3>${episode.series_name}</h3>
          <p class="type">${episode.series_genre}</p>
          <h4 class="mt-5 fs-1">R${episode.series_price}</h4>
          <div class='series_buttons d-flex gap-5 mt-5 ps-4'>
            <i class="fa-solid fa-circle-info fs-2" type='button'></i>
            <i class="fa-solid fa-cart-plus fs-2" type='button'></i>
          </div>
        </div>
      </div>
      <div class="blur_back bright_back" style="background: url(${episode.background}); background-size: cover"></div>
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

.series {
  flex-wrap: wrap;
}

.series_card {
  position: relative;
  display: block;
  width: 700px;
  height: 350px;
  margin: 35px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
}
.series_card:hover {
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
.series_header {
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
  /* justify-items: center; */
}

select:hover {
  background: #0d0d0c;
  color: white;
}

@media screen and (min-width: 768px) {
  .series_header {
    width: 60%;
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
  .series_card {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .series_header {
    width: 100%;
    margin-top: 85px;
  }

  .info_section {
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
}
</style>
