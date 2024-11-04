<template>
  <BaseLayout>
    <template #default>
      <ConTab :active="1" />
      <ConBox>
        <h3 class="h6">현재 위치 보기 - 아버지</h3>
        <div id="map">
          <img :src="marker" />
        </div>
      </ConBox>
    </template>
  </BaseLayout>
</template>

<script setup>
import ConBox from "@/components/ConBox.vue";
import ConTab from "@/components/includes/content/ConTab.vue";
import BaseLayout from "@/components/includes/layout/BaseLayout.vue";
import marker from "@/assets/images/content/marker.svg";
</script>

<style lang="scss" scopped>
#map {
  margin-top: 1.6rem;
  position: relative;
  height: calc(100vh - 20rem);
  background-color: #ddd;
  img {
    position: absolute;
    left: calc(50% - 1.1rem);
    top: calc(50% - 1.35rem);
    width: 2.2rem;
    height: 2.7rem;
  }
}
</style>
