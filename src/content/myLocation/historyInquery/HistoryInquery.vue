<template>
  <BaseLayout>
    <template #default>
      <ConTab />
      <ul class="history-list">
        <li
          class="history-item"
          v-for="history in $store.state.myHistory"
          :key="history"
        >
          <div class="history-item-inner" v-if="history.loaded">
            <div class="con">
              <h3>{{ history.title }}</h3>
              <div class="text">{{ history.company }} | {{ history.date }}</div>
            </div>
            <a-button
              @click="$store.commit('setHistoryMapOpen', history.id)"
              :clickTest="history.mapOpen"
              >지도보기</a-button
            >
          </div>
          <div class="history-item-inner" v-else>
            <div class="con">
              <h3 class="em-red">{{ history.title }}</h3>
              <div class="text">알수없음</div>
            </div>
          </div>
          <div class="map" v-if="history.mapOpen && history.loaded">
            <div id="map">
              <img :src="marker" />
            </div>
          </div>
        </li>
      </ul>
    </template>
  </BaseLayout>
</template>

<script setup>
import marker from "@/assets/images/content/marker.svg";
import ConTab from "@/components/includes/content/ConTab.vue";
import BaseLayout from "@/components/includes/layout/BaseLayout.vue";
</script>

<style lang="scss">
.history-list {
  @include bodySpace;
  .history-item {
    .history-item-inner {
      @include flexbox;
      justify-content: space-between;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      border-bottom: 1px solid;
      @include color(border-color, gray-050);
    }
    .con {
      h3 {
        @include title(p1, 500);
      }
      .text {
        @include title(p2);
        @include color(color, gray-600);
      }
    }
    .ant-btn {
    }
  }
  .map,
  #map {
    position: relative;
    height: 20rem;
    background-color: #ddd;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 1.2rem;
      height: 1.7rem;
    }
  }
}
</style>
