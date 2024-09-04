<template>
  <a-button
    :type="props.type"
    :disabled="props.disabled"
    :danger="props.danger"
    :shape="props.shape"
    :ghost="props.ghost"
    :href="props.href"
    :htmlType="props.htmlType"
    :size="props.size"
    :target="props.target"
    :click="props.click"
  >
    <span class="btn-inner">
      <slot name="f-icon" class="f-icon"> </slot>
      <slot></slot>
      <slot name="b-icon" class="b-icon"></slot>
    </span>
  </a-button>
</template>

<script setup>
import { defineProps } from "vue";

// button의 loading 기능 제외
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  danger: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    default: "",
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "",
  },
  htmlType: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "false",
  },
  target: {
    type: String,
    default: "false",
  },
  click: Function,
  html: String,
});
</script>

<style lang="scss" scoped>
.ant-btn {
  height: auto;
  .btn-inner {
    @include flexbox;
    .f-icon {
      margin-right: 0.4rem;
    }
    .b-icon {
      margin-left: 0.8rem;
    }
  }
  &.ant-btn-sm {
    padding: 0.4rem 0.8rem;
    height: auto;
    .btn-inner {
      .f-icon {
        margin-right: 0.2rem;
      }
      .b-icon {
        margin-left: 0.4rem;
      }
    }
  }
  &.ant-btn-lg {
    height: auto;
  }
}
</style>
