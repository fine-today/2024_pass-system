<template>
  <div class="container base" :id="$store.state.layout">
    <BaseHeader>
      <template #gnb-icons>
        <slot name="gnb-icons"> </slot>
      </template>
    </BaseHeader>
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
import BaseHeader from "./BaseHeader.vue";

const store = useStore();
const route = useRoute();

onMounted(() => {
  setTimeout(() => {
    // mount가 끝나는 시점
    store.commit("setLayout", route.path === "/" ? "main" : "sub");
  }, 0);
});
</script>

<style lang="scss">
.container.base {
  display: grid;
  height: 100%;
  grid-template-rows: 5rem 1fr auto;
  grid-template-areas: "header" "content" "footer";
  overflow: hidden;
  .header {
    grid-area: header;
    height: 5rem;
    @include bodySpace;
    @include flexbox;
    .gnb-wrap {
      flex: 1;
      @include flexbox;
      justify-content: space-between;
    }
    .gnb-title {
      flex: auto;
      @include title(h5);
      text-align: center;
      @include ellipsis;
    }
    .gnb-icons {
      flex: 1;
      @include flexbox;
      justify-content: flex-end;
      gap: 0.8rem;
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
      .user svg {
        width: 2.1rem;
        height: 2.1rem;
      }
    }
  }
  &#main {
    background-color: #f1f2f4;
    .header {
      .logo {
        flex: 1;
        svg {
          width: 7.8rem;
          height: 2.4rem;
        }
      }
      .gnb-icons {
        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
        .user svg {
          width: 2.1rem;
          height: 2.1rem;
        }
      }

      .gnb-title {
        font-size: 0;
        max-width: 14rem;
      }
    }
  }
  &#sub {
    .header {
      .gnb-back {
        flex: 1;
        svg {
          width: 2.6rem;
          height: 2.6rem;
        }
      }
    }
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
