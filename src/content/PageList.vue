<template>
  <div class="conbox">
    <table style="text-align: center" class="guide-table">
      <colgroup>
        <col style="width: 30%" />
        <col />
      </colgroup>
      <thead>
        <tr v-for="(page, i) in pages" :key="i">
          <th>{{ page.title }}</th>
          <td class="align-left">
            <router-link :to="page.href">{{ page.href }}</router-link>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script setup>
const pages = [
  {
    id: 1,
    title: "가이드",
    href: "/guide",
    empty: "",
  },
  // {
  //   id: 2,
  //   title: "메인",
  //   href: "/main",
  //   empty: "",
  // },
  {
    id: 3,
    title: "내위치지키미",
    href: "/my-location",
    empty: "",
  },
  {
    id: 4,
    title: "서비스동의",
    href: "/service-agree",
    empty: "",
  },
  {
    id: 5,
    title: "서비스동의-비밀번호확인",
    href: "/service-password",
    empty: "",
  },
  {
    id: 6,
    title: "서비스동의완료",
    href: "/service-agree-complete",
    empty: "",
  },
  {
    id: 7,
    title: "내 위치 조회 이력",
    href: "/history-inquery",
    empty: "",
  },
  {
    id: 8,
    title: "가족위치조회",
    href: "/family-inquery",
    empty: "",
  },
  {
    id: 9,
    title: "가족위치조회-현재위치보기",
    href: "/family-inquery/location",
    empty: "",
  },
  {
    id: 10,
    title: "가족위치조회-위치조회자 등록 정보",
    href: "/family-inquery/modify",
    empty: "",
  },
  // {
  //   id: 11,
  //   title: "안전지도",
  //   href: "/safety-map",
  //   empty: "",
  // },
  // {
  //   id: 12,
  //   title: "가족위치조회-현재위치보기",
  //   href: "/family-inquery/history/1",
  //   empty: "",
  // },
];
console.log(pages);
</script>

<style scoped>
.conbox {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
table.guide-table {
  width: 100%;
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
  th,
  td {
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    padding: 10px;
  }
  th {
    background-color: #ddd;
  }
}
</style>
