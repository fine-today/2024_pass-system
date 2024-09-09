<template>
  <div class="guide">
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
.guide {
  h3 {
    margin: 1rem 0;
  }
  h4 {
    margin: 1rem 0;
  }
}
</style>
