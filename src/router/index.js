import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// Define routes
const routes = [
  {
    path: "/",
    name: "public",
    redirect: "/",
    meta: { title: "Dashboard" },
    children: [
      {
        path: "",
        name: "pDashboard",
        component: defineAsyncComponent(() => import("../views/Dashboard.vue")),
      },
    ],
  },
  // Default 404 page
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: defineAsyncComponent(() => import("../views/Page404.vue")),
    meta: { title: "Oops! 404 Not Found" },
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // ✅ Corrected from "BaseRoutes" to "routes"
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

// Global navigation guards (optional)
router.beforeEach((to, from, next) => {
  next();
});
router.afterEach(() => {});

export default router;
