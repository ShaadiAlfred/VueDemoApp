import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Todos from '../views/Todos.vue';
import Albums from '../views/Albums.vue';
import Images from '../views/Images.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
  },
  {
    path: '/albums/:id',
    component: Images,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
