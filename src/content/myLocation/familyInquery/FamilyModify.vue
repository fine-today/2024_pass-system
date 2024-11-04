<template>
  <BaseLayout>
    <ConBox>
      <div class="input-wrap">
        <label for="name">이름</label>
        <a-input v-model:value="value" placeholder="" id="name" allow-clear />
      </div>
      <div class="input-wrap">
        <label for="nickname">닉네임</label>
        <a-input
          v-model:value="value"
          placeholder=""
          id="nickname"
          allow-clear
        />
      </div>
      <div class="input-wrap">
        <label for="phone">전화번호</label>
        <a-input v-model:value="value" placeholder="" id="phone" allow-clear />
      </div>
      <div class="input-wrap">
        <label for="message">요청페이지</label>
        <a-input
          v-model:value="value"
          placeholder="위치 제공 등록을 수락해 주세요."
          id="message"
          disabled
          allow-clear
        />
      </div>
      <p class="warning em-red">
        *등록 시 위치 제공자에게 위치 조회 앱 설치 링크 알림톡이 발송됩니다.
      </p>
    </ConBox>
  </BaseLayout>
</template>

<script setup>
import ConBox from "@/components/ConBox.vue";
import BaseLayout from "@/components/includes/layout/BaseLayout.vue";
</script>

<style lang="scss" scopped></style>
