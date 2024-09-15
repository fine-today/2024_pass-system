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

<script setup></script>

<style lang="scss" scopped>
.con-tab {
  @include flexbox;
  margin-bottom: 1.6rem;
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
        height: 2px;
        @include color(background-color, black);
      }
    }
  }
}
</style>
