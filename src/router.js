import { createWebHistory, createRouter } from "vue-router";
import MainContent from "./content/main/MainContent.vue";
import GuidePage from "./content/guide/GuidePage.vue";
import FamilyInquery from "./content/familyInquery/FamilyInquery.vue";

const routes = [
  {
    //main
    path: "/",
    component: MainContent,
  },
  {
    //가족위치조회
    path: "/familyInquery",
    component: FamilyInquery,
  },
  {
    //가족위치조회
    path: "/guide",
    component: GuidePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
