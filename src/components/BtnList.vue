<template>
  <div class="btn-list">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scopped>
.btn-list {
  @include flexbox;
  gap: 1.2rem;
  padding-bottom: 0.8rem;
  @include bodySpace;
  > * {
    flex: 1;
  }
}
</style>
