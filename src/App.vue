<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#222', // antd theme primary color 변경
      },
    }"
    ><router-view />
  </a-config-provider>
</template>

<script setup></script>

<style lang="scss"></style>
