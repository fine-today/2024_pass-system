<template>
  <div class="container simple" :id="$store.state.layout">
    <div id="content" class="content">
      <slot></slot>
    </div>

    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

onMounted(() => {
  setTimeout(() => {
    // mount가 끝나는 시점
    store.commit("setLayout", route.path === "/" ? "main" : "sub");
  }, 0);
});
</script>

<style lang="scss" scoped>
.container.simple {
  display: grid;
  height: 100%;
  grid-template-rows: 0 1fr auto;
  grid-template-areas: "header" "content" "footer";
  overflow: hidden;
  .header {
    grid-area: header;
  }
  #content {
    grid-area: content;
    display: block;
    overflow: auto;
    padding-top: 1.6rem;
    padding-bottom: 0.8rem;
  }
  .footer {
    grid-area: footer;
    padding-top: 0.8rem;
  }
}
</style>
