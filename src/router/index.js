import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";
import loadable from "@/utils/loadable";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  /**
   * 路由懒加载
   * 加载会有一个短暂的白屏
   * 我们可以加一个load
   * */
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadable(() =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile/index.vue")
    )
  },
  {
    path: "/course",
    name: "course",
    component: loadable(() =>
      import(/* webpackChunkName: "course" */ "@/views/Course/index.vue")
    )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
