import { createRouter, createWebHistory } from "vue-router";
import SeeItView from "@/views/SeeItView.vue";
import SaveItView from "@/views/SaveItView.vue";
import SculptItView from "@/views/SculptItView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/seeIt",
      name: "SeeIt",
      component: SeeItView,
    },
    {
      path: "/saveIt",
      name: "SaveIt",
      component: SaveItView,
    },
    {
      path: "/sculptIt",
      name: "SculptIt",
      component: SculptItView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/NotFound",
    },
    {
      path: "/NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
