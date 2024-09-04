<template>
  <div>
    Guide
    <br />
    <br />&nbsp;&nbsp;&nbsp;
    <PsButton type="primary" size="small"
      ><template #f-icon>
        <DownloadOutlined />
      </template>
      Primary Button
      <template #b-icon>
        <DownloadOutlined />
      </template>
    </PsButton>
  </div>
</template>

<script setup>
import { DownloadOutlined } from "@ant-design/icons-vue";
import PsButton from "./../../components/PsButton.vue";
</script>

<style lang="scss"></style>
