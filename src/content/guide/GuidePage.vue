<template>
  <div>
    <h3>Tags</h3>
    <GuideTags />
    <h3>Buttons</h3>
    <GuideButtons />
  </div>
</template>

<script setup>
import GuideButtons from "./GuideButtons.vue";
import GuideTags from "./GuideTags.vue";
</script>

<style lang="scss">
h4 {
  margin: 2rem 0;
}
</style>
