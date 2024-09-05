<template>
  <a-button
    :type="props.type"
    :disabled="props.disabled"
    :danger="props.danger"
    :shape="props.shape"
    :ghost="props.ghost"
    :href="props.href"
    :htmlType="button"
    :size="props.size"
    :target="props.target"
    :click="props.click"
  >
    <span class="btn-inner" :class="props.bold ? 'btn-bold' : ''">
      <span class="f-icon"><slot name="f-icon"></slot></span>
      <slot></slot>
      <span class="b-icon"> <slot name="b-icon"></slot></span>
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
  }, // primary | secondary | border |text | default ( | ghost | dashed | link ....)
  disabled: {
    type: Boolean,
    default: false,
  },
  danger: {
    type: Boolean,
    default: false,
  },
  shape: String,
  ghost: {
    type: Boolean,
    default: false,
  },
  href: String,
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
  bold: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.ant-btn {
  height: auto;
  border-radius: 0.8rem;
  padding: 0.8rem 1.2rem;
  &:disabled {
    opacity: 0.3;
  }
  &.ant-btn-primary {
    @include color(background-color, black);
    @include color(color, white);
  }
  &.ant-btn-secondary {
    background-color: #f0f2f4;
    @include color(color, black);
  }
  &.ant-btn-border {
    border: 1px solid;
    @include color(border-color, black);
    @include color(color, tertiary);
  }
  &.ant-btn-default {
    @include color(color, tertiary);
    @include color(border-color, gray-400);
  }
  &.ant-btn-text {
    @include color(color, tertiary);
  }
  .btn-inner {
    @include flexbox;
    @include title(p2);
    &.btn-bold {
      font-weight: 700;
    }
    .f-icon,
    .b-icon {
      @include flexbox;
      justify-content: center;
      width: 1.6rem;
      height: 1.6rem;
      font-size: 1.6rem;
    }
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
    border-radius: 0.4rem;
    @include title;
    .btn-inner {
      &.btn-bold {
        font-weight: 700;
      }
      .f-icon,
      .b-icon {
        @include flexbox;
        justify-content: center;
        width: 1.4rem;
        height: 1.4rem;
        font-size: 1.4rem;
      }
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
    border-radius: 1.2rem;
    padding: 1.2rem 2rem;
    .btn-inner {
      @include title(p1);
      &.btn-bold {
        font-weight: 700;
      }
      .f-icon,
      .b-icon {
        @include flexbox;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
      }
    }
  }
}
</style>
