import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/grocery"),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: {
        name: "delicacies",
      },
    },
    {
      path: "/delicacies",
      name: "delicacies",
      component: () => import("../views/DelicaciesView.vue"),
    },
    {
      path: "/to-buy",
      name: "to-buy",
      component: () => import("../views/ToBuyView.vue"),
    },
    {
      path: "/ingredients-settings",
      name: "ingredients-settings",
      component: () => import("../views/IngredientsSettingsView.vue"),
    },
  ],
});

export default router;
