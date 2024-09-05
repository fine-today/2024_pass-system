<template>
  <div>
    <h4>Large / Large Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <PsButton type="primary" size="large"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="primary" size="large" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- secondary -->
      <a-col :span="12">
        <PsButton type="secondary" size="large"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="secondary" size="large" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- border -->
      <a-col :span="12">
        <PsButton type="border" size="large"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="border" size="large" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- default -->
      <a-col :span="12">
        <PsButton size="large"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton size="large" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- text -->
      <a-col :span="12">
        <PsButton type="text" size="large"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="text" size="large" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
    </a-row>

    <h4>Large-bold / Large-bold Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <PsButton type="primary" size="large" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="primary" size="large" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- secondary -->
      <a-col :span="12">
        <PsButton type="secondary" size="large" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="secondary" size="large" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- border -->
      <a-col :span="12">
        <PsButton type="border" size="large" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="border" size="large" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- default -->
      <a-col :span="12">
        <PsButton size="large" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton size="large" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- text -->
      <a-col :span="12">
        <PsButton type="text" size="large" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="text" size="large" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
    </a-row>

    <h4>Medium / Medium Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <PsButton type="primary"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="primary" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- secondary -->
      <a-col :span="12">
        <PsButton type="secondary"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="secondary" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- border -->
      <a-col :span="12">
        <PsButton type="border"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="border" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- default -->
      <a-col :span="12">
        <PsButton
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- text -->
      <a-col :span="12">
        <PsButton type="text"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="text" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
    </a-row>

    <h4>Medium-bold / Medium-bold Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <PsButton type="primary" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="primary" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- secondary -->
      <a-col :span="12">
        <PsButton type="secondary" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="secondary" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- border -->
      <a-col :span="12">
        <PsButton type="border" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="border" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- default -->
      <a-col :span="12">
        <PsButton bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- text -->
      <a-col :span="12">
        <PsButton type="text" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="text" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
    </a-row>

    <h4>Small / Small Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <PsButton type="primary" size="small"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="primary" size="small" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- secondary -->
      <a-col :span="12">
        <PsButton type="secondary" size="small"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="secondary" size="small" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- border -->
      <a-col :span="12">
        <PsButton type="border" size="small"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="border" size="small" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- default -->
      <a-col :span="12">
        <PsButton size="small"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton size="small" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- text -->
      <a-col :span="12">
        <PsButton type="text" size="small"
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="text" size="small" disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
    </a-row>

    <h4>Small-bold / Small-bold Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <PsButton type="primary" size="small" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="primary" size="small" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Primary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- secondary -->
      <a-col :span="12">
        <PsButton type="secondary" size="small" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="secondary" size="small" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          Secondary
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- border -->
      <a-col :span="12">
        <PsButton type="border" size="small" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="border" size="small" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          border
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- default -->
      <a-col :span="12">
        <PsButton size="small" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton size="small" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          default
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <!-- text -->
      <a-col :span="12">
        <PsButton type="text" size="small" bold
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
      <a-col :span="12">
        <PsButton type="text" size="small" bold disabled
          ><template #f-icon>
            <DownloadOutlined />
          </template>
          text
          <template #b-icon>
            <DownloadOutlined />
          </template>
        </PsButton>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { DownloadOutlined } from "@ant-design/icons-vue";
import PsButton from "./../../components/PsButton.vue";
</script>
