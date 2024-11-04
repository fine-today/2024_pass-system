<template>
  <BaseLayout>
    <template #default>
      <ConTab :active="1" />
      <ul class="history-list">
        <li class="history-item" v-for="history in myHistory" :key="history">
          <div class="history-item-inner" v-if="history.loaded">
            <div class="con">
              <div class="text">{{ history.date }}</div>
              <h3>{{ history.title }}</h3>
            </div>
            <a-button
              @click="
                $store.commit('getThisFamilyMapOpen', {
                  familyId,
                  historyId: history.id,
                })
              "
              >지도보기</a-button
            >
          </div>
          <div class="history-item-inner" v-else>
            <div class="con">
              <div class="text">알수없음</div>
              <h3 class="em-red">{{ history.title }}</h3>
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

import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const myFamily = reactive({});

store.state.family.forEach((familyEl) => {
  if (familyEl.id === parseInt(route.params.id)) {
    myFamily.value = familyEl;
  }
});

const { history: myHistory, id: familyId } = myFamily.value;
</script>

<style lang="scss"></style>
