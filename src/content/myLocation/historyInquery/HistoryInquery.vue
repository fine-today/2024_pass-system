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
            <a-button @click="$store.commit('setHistoryMapOpen', history.id)"
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

<style lang="scss"></style>
