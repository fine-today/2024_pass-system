import { createWebHistory, createRouter } from "vue-router";
import MainContent from "./content/main/MainContent.vue";
import GuidePage from "./content/guide/GuidePage.vue";
import SafetyMap from "./content/myLocation/safetyMap/SafetyMap.vue";
import HistoryInquery from "@/content/myLocation/historyInquery/HistoryInquery.vue";
import SafetyInsurence from "./content/myLocation/safetyInsurence/SafetyInsurence.vue";
import MyLocation from "./content/myLocation/MyLocation.vue";
import FamilyInquery from "./content/myLocation/familyInquery/FamilyInquery.vue";
import ServiceAgree from "./content/myLocation/serviecAgree/ServiceAgree.vue";
import ServiceAgreeComplete from "./content/myLocation/serviecAgree/ServiceAgreeComplete.vue";
import ServicePassword from "./content/myLocation/serviecAgree/ServicePassword.vue";
import FamilyHistory from "./content/myLocation/familyInquery/FamilyHistory.vue";
import FamilyLocation from "./content/myLocation/familyInquery/FamilyLocation.vue";
import FamilyModify from "./content/myLocation/familyInquery/FamilyModify.vue";
import PageList from "./content/PageList.vue";

const routes = [
  {
    //PageList
    name: "router",
    path: "/",
    component: PageList,
  },
  {
    //main
    name: "main",
    path: "/main",
    component: MainContent,
  },
  {
    name: "내위치지키미",
    path: "/my-location",
    component: MyLocation,
  },
  //서비스동의
  {
    // name: "서비스동의",
    path: "/service-agree",
    component: ServiceAgree,
  },
  {
    // name: "서비스동의-비밀번호확인",
    path: "/service-password",
    component: ServicePassword,
  },
  {
    // name: "서비스동의완료",
    path: "/service-agree-complete",
    component: ServiceAgreeComplete,
  },
  {
    // name: "내 위치 조회 이력",
    path: "/history-inquery",
    component: HistoryInquery,
  },
  {
    // name: "가족위치조회",
    path: "/family-inquery",
    component: FamilyInquery,
  },
  {
    // name: "가족위치조회-현재위치보기",
    path: "/family-inquery/location",
    component: FamilyLocation,
  },
  {
    // name: "가족위치조회-현재위치보기",
    path: "/family-inquery/history/:id",
    component: FamilyHistory,
  },
  {
    // name: "가족위치조회-위치조회자 등록 정보",
    path: "/family-inquery/modify",
    component: FamilyModify,
  },
  {
    // name: "안전지도",
    path: "/safety-map",
    component: SafetyMap,
  },
  {
    // name: "보험",
    path: "/safety-insurence",
    component: SafetyInsurence,
  },
  {
    name: "가이드",
    path: "/guide",
    component: GuidePage,
  },
  // {
  //   name: "페이지리스트",
  //   path: "/page-list",
  //   component: PageList,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
