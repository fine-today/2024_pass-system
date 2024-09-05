<template>
  <a-tag
    :color="props.color"
    :closable="props.closable"
    :bordered="props.bordered"
    :capsule="props.capsule"
    >text</a-tag
  >
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  closable: {
    type: Boolean,
    default: false,
  },
  color: String,
  bordered: {
    type: Boolean,
    default: false,
  },
  capsule: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.ant-tag {
}
</style>
