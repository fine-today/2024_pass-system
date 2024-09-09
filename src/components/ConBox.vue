<template>
  <div class="conbox" :style="borderStyle"><slot></slot></div>
</template>
<script setup>
import { defineProps, ref, onMounted } from "vue";
const props = defineProps({
  bordered: String,
});

const borderStyle = ref({});
onMounted(() => {
  if (props.bordered === "bottom") {
    borderStyle.value = { borderBottom: "0.8rem solid #F8F9FB" };
  }
});
</script>

<style lang="scss">
.content .conbox {
  @include bodySpace;
}
</style>
