import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("../views/MoviesView.vue"),
  },
  {
    path: "/series",
    name: "series",
    component: () => import("../views/SeriesView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegistrationPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/movie",
    name: "movie",
    component: () => import("../views/OneMovieView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/deals",
    name: "deals",
    component: () => import("../views/MovieDeals.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
