import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/blogs",
    name: "blogs",
    component: () => import("../components/BlogsList.vue")
  },
  {
    path: "/blogs/:id",
    name: "blogs-details",
    component: () => import("../components/Blog.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddBlog.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
