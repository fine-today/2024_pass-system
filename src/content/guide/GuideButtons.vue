<template>
  <div>
    <h4>Large / Large Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <a-button type="primary" size="large"
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" size="large" disabled
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="large"
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="large" disabled
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="large"
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="large" disabled
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="large"
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="large" disabled
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="large"
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="large" disabled
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
    </a-row>

    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <a-button type="primary" size="large" data-bold
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" size="large" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="large" data-bold
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="large" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="large" data-bold
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="large" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="large" data-bold
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="large" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="large" data-bold
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="large" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
    </a-row>

    <h4>Medium / Medium Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <a-button type="primary"
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" disabled
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary"
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" disabled
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border"
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" disabled
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button disabled
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text"
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" disabled
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
    </a-row>

    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <a-button type="primary" data-bold
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" data-bold
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" data-bold
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button data-bold
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button data-bold disabled
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" data-bold
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
    </a-row>

    <h4>Small / Small Disabled</h4>
    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <a-button type="primary" size="small"
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" size="small" disabled
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="small"
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="small" disabled
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="small"
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="small" disabled
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="small"
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="small" disabled
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="small"
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="small" disabled
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
    </a-row>

    <a-row :gutter="[12, 12]">
      <!-- primary-->
      <a-col :span="12">
        <a-button type="primary" size="small" data-bold
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" size="small" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Primary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="small" data-bold
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="secondary" size="small" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Secondary<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="small" data-bold
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="border" size="small" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Border<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="small" data-bold
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button size="small" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Default<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="small" data-bold
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
      <a-col :span="12">
        <a-button type="text" size="small" data-bold disabled
          ><DownloadOutlined class="f-icon" /> Text<DownloadOutlined
            class="b-icon"
          />
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { DownloadOutlined } from "@ant-design/icons-vue";
</script>
