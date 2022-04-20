import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: () =>
      import(/* webpackChunkName: "staff" */ "../views/Team.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/events/",
    name: "EventsLoader",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/events.vue"),
  },
  {
    path: "/opportunities",
    name: "Opportunities",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Opportunities.vue"),
  },
  {
    path: "/security",
    name: "security",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/security.vue"),
  },
  {
    path: "/meetups/",
    name: "forums",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // APPLY FOR INTRL APP.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/meets.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,





});

export default router;
