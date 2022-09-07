<template>
  <div class="container">
    <h2 class="heading">CONTACT US</h2>
    <div class="row mt-5">
      <div class="col">
        <h4>Can't find your favourite movie/series?</h4>
        <h6>Contact us now!</h6>
        <div class="mt-5 register-dark">
          <form
            action="https://formspree.io/f/mqkjelwo"
            method="POST"
            class="d-flex gap-4"
          >
            <div class="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                class="form-control"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block">
              Send
            </button>
          </form>
        </div>
      </div>
      <div class="col col-img">
        <img
          src="https://wallpaperaccess.com/full/556311.jpg"
          alt=""
          class="img-about mt-5"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
body {
  background-color: black;
}

form {
  flex-direction: column;
}

h6,
h4 {
  color: white;
}

.img-about {
  height: 350px;
  margin: 50px;
}

.col-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading {
  margin-top: 100px;
}

form,
.inputs {
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  align-items: center;
}

input,
textarea {
  width: 300px;
}

.register-dark {
  display: flex;
  justify-content: center;
}

.register-dark form {
  max-width: 350px;
  width: 90%;
  background-color: black;
  padding: 40px;
  border-radius: 4px;
  /* transform: translate(-50%, -50%); */
  /* position: absolute; */
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
  /* background: #214a80; */
  outline: none;
}

.btn-block:hover {
  background-color: black!important;
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
</style>
