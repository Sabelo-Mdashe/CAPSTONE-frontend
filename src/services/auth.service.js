// import axios from "axios";
// const api_url = "https://capstoneprojectbackend.herokuapp.com/users";
// class AuthService {
//   login(user) {
//     return axios
//       .post(api_url + "/login", {
//         user_email: user.user_email,
//         user_password: user.user_password,
//       })
//       .then((res) => {
//         if (res.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(res.data));
//         }
//         return res.data;
//       });
//   }

//   logout() {
//     localStorage.removeItem("user");
//   }

//   register(user) {
//     return axios.post(api_url + "/register", {
//       full_name: user.full_name,
//       user_email: user.user_email,
//       user_password: user.user_password,
//       user_type: user.user_type,
//     });
//   }
// }

// export default new AuthService();
