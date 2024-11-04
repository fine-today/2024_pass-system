<template>
  <ul class="con-tab">
    <li
      v-for="(tab, i) in $store.state.tabs"
      :key="i"
      :class="tab.active === true ? 'active' : ''"
    >
      <router-link
        :to="tab.anchor"
        @click="$store.commit('setActiveTab', tab.id)"
      >
        {{ tab.name }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  active: Number,
});

store.commit("setActiveTab", props.active);
</script>

<style lang="scss" scopped>
.con-tab {
  @include flexbox;
  justify-content: center;
  margin-bottom: 3.2rem;
  gap: 1.2rem;
  @include bodySpace;
  border-bottom: 1px solid;
  @include color(border-color, gray-300);
  li {
    @include flexbox;
    justify-content: center;
    a {
      @include flexbox;
      justify-content: center;
      @include title(p1);
      @include color(color, gray-700);
      position: relative;
      letter-spacing: -0.05em;
      padding-bottom: 0.8rem;
    }
    &.active a {
      @include color(color, black);
      &::after {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.2rem;
        @include color(background-color, black);
      }
    }
  }
}
</style>
