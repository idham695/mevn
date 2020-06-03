import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "blogs",
      component: () => import("../components/BlogsList")
    },
    {
      path: "/blogs/:id",
      name: "detail blog",
      component: () => import("../components/Blog")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddBlog")
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
});

export default router;
