<template>
  <div>
    <a-row :gutter="[12, 12]">
      <a-col :span="6"><a-tag color="pink">태그</a-tag></a-col>
      <a-col :span="6"
        ><a-tag color="pink" :bordered="false">태그</a-tag></a-col
      >
      <!-- <a-col :span="6"><a-tag color="pink" data-bold>태그</a-tag></a-col>

      <a-col :span="6"
        ><a-tag color="pink" :bordered="false" data-bold>태그</a-tag></a-col
      >
      <a-col :span="6"><a-tag color="pink">태그</a-tag></a-col>
      <a-col :span="6"
        ><a-tag color="pink" :bordered="false">태그</a-tag></a-col
      >
      <a-col :span="6"><a-tag color="pink">태그</a-tag></a-col>

      <a-col :span="6"
        ><a-tag color="pink" :bordered="false">태그</a-tag></a-col
      >
      <a-col :span="6"><a-tag color="pink">태그</a-tag></a-col>
      <a-col :span="6"
        ><a-tag color="pink" :bordered="false">태그</a-tag></a-col
      >
      <a-col :span="6"><a-tag color="pink">태그</a-tag></a-col>

      <a-col :span="6"
        ><a-tag color="pink" :bordered="false">태그</a-tag></a-col
      >
      <a-col :span="6"><a-tag color="pink">태그</a-tag></a-col>
      <a-col :span="6"
        ><a-tag color="pink" :bordered="false">태그</a-tag></a-col
      >
      <a-col :span="6"><a-tag color="pink">태그</a-tag></a-col>
      <a-col :span="6"
        ><a-tag color="pink" :bordered="false">태그</a-tag></a-col
      >-->
    </a-row>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.ant-tag {
  padding: 0 0.4rem 0.2rem 0.4rem;
  @include title(caption1);
  border-radius: 0.4rem;
  border-color: transparent;
  &.ant-tag-pink {
    background-color: transparent;
    @include color(color, red-500);
    @include color(border-color, red-500);
    &.ant-tag-borderless {
      background-color: #ffebec;
      border-color: transparent;
    }
  }
}
</style>
