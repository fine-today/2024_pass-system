import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      layout: "sub",
      tabs: [
        {
          id: 0,
          name: "내 위치 조회 이력",
          anchor: "/history-inquery",
          active: true,
        },
        {
          id: 1,
          name: "가족 위치 조회",
          anchor: "/family-inquery",
          active: false,
        },
        {
          id: 2,
          name: "안전 지도",
          anchor: "/history-inquery",
          active: false,
        },
        {
          id: 3,
          name: "보험",
          anchor: "/history-inquery",
          active: false,
        },
      ],
      myHistory: [
        {
          id: 0,
          title: "긴급출동",
          company: "OO 보험 주식회사",
          date: "2024.01.02 09:12",
          map: "a",
          mapOpen: true,
          loaded: true,
        },
        {
          id: 1,
          title: "부정 사용 방지 부정 사용 방지 부정 사용 방지",
          company: "OO 보험 주식회사",
          date: "2024.01.02 09:13",
          map: "a",
          mapOpen: false,
          loaded: true,
        },
        {
          id: 2,
          title: "ㅇㅇ데이터",
          company: "OO 보험 주식회사",
          date: "2024.01.02 09:14",
          map: "a",
          mapOpen: false,
          loaded: false,
        },
        {
          id: 3,
          title: "긴급출동",
          company: "OO 보험 주식회사",
          date: "2024.01.02 09:15",
          map: "a",
          mapOpen: false,
          loaded: true,
        },
      ],

      family: [
        {
          id: 0,
          name: "홍길동",
          nickname: "아버지",
          location: "",
          call: "010-1234-5678",
          message: "",
          history: [
            {
              id: 0,
              title: "긴급출동",
              company: "OO 보험 주식회사",
              date: "2024.01.02 09:12",
              map: "a",
              mapOpen: true,
              loaded: true,
            },
            {
              id: 1,
              title: "부정 사용 방지",
              company: "OO 보험 주식회사",
              date: "2024.01.02 09:13",
              map: "a",
              mapOpen: false,
              loaded: true,
            },
          ],
          modify: false,
          delete: false,
          loading: "ended",
        },
        {
          id: 1,
          name: "홍길동2",
          nickname: "할머니",
          location: "",
          call: "010-1234-5678",
          message: "메세지",
          history: [
            {
              id: 0,
              title: "ㅇㅇ데이터",
              company: "OO 보험 주식회사",
              date: "2024.01.02 09:14",
              map: "a",
              mapOpen: false,
              loaded: false,
            },
            {
              id: 1,
              title: "긴급출동",
              company: "OO 보험 주식회사",
              date: "2024.01.02 09:15",
              map: "a",
              mapOpen: false,
              loaded: true,
            },
          ],
          modify: false,
          delete: false,
          loading: "loaded",
        },
      ],
    };
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload;
    },
    setActiveTab(state, activeTab) {
      state.tabs.forEach((tab) => {
        tab.active = activeTab === tab.id ? true : false;
      });
    },
    setHistoryMapOpen(state, id) {
      state.myHistory.forEach((history) => {
        if (history.id === id) {
          history.mapOpen = !history.mapOpen;
        }
      });
    },
    getThisFamilyMapOpen(state, ids) {
      const { familyId, historyId } = ids;
      state.family.forEach((familyEl) => {
        if (familyEl.id === parseInt(familyId)) {
          familyEl.history.forEach((history) => {
            if (history.id === parseInt(historyId)) {
              history.mapOpen = !history.mapOpen;
            }
          });
        }
      });
    },
  },
  actions: {
    //ajax 요청
  },
});

export default store;
