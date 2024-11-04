<template>
  <BaseLayout>
    <template #default>
      <ConTab :active="1" />
      <ConBox class="con-header">
        <h3>위치 조회자</h3>
        <p class="align-right">*최대 4명까지 등록 가능합니다</p>
      </ConBox>

      <ConBox>
        <div
          class="family-box"
          v-for="family in $store.state.family"
          :key="family"
        >
          <div class="title-wrap">
            <h4>
              {{ family.nickname }}
              <a-tag color="pink" v-if="family.loading === 'loaded'"
                >요청중</a-tag
              >
            </h4>
            <div class="btn-wrap">
              <button type="button" class="modify" @click="showModal">
                <SvgModify />
              </button>
              <button type="button" class="delete"><SvgDelete /></button>
            </div>
          </div>
          <div class="btn-box">
            <a-button type="secondary">현재 위치 보기</a-button>
            <a-button type="secondary">위치 이력 보기</a-button>
          </div>
        </div>
      </ConBox>

      <ConBox>
        <a-button type="primary" size="large" class="w100p" @click="showModal"
          >등록</a-button
        >
      </ConBox>

      <a-modal
        v-model:open="open"
        title="위치 확인 동의 등록 요청하기"
        @ok="handleOk"
        centered
      >
        <template #footer>
          <BtnList>
            <a-button key="back" @click="handleCancel">신용대출 비교</a-button>
            <a-button key="submit" type="primary" @click="handleOk"
              >등록</a-button
            >
          </BtnList>
        </template>

        <ConBox>
          <div class="input-wrap">
            <label for="name">이름</label>
            <a-input
              v-model:value="value"
              placeholder=""
              id="name"
              allow-clear
            />
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
            <a-input
              v-model:value="value"
              placeholder=""
              id="phone"
              allow-clear
            />
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
      </a-modal>
    </template>
  </BaseLayout>
</template>

<script setup>
import ConBox from "@/components/ConBox.vue";
import ConTab from "@/components/includes/content/ConTab.vue";
import BaseLayout from "@/components/includes/layout/BaseLayout.vue";
import SvgModify from "@/components/images/SvgModify.vue";
import SvgDelete from "@/components/images/SvgDelete.vue";

import { ref } from "vue";
import BtnList from "@/components/BtnList.vue";
const loading = ref(false);
const open = ref(true);
const showModal = () => {
  open.value = true;
};
const handleOk = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    open.value = false;
  }, 2000);
};
const handleCancel = () => {
  open.value = false;
};
</script>

<style lang="scss" scoped>
.con-header {
  @include bodySpace;
  h3 {
    @include title(p1, 500);
    margin-bottom: 0.4rem;
  }
  p {
    @include title(p3);
    @include color(color, red-500);
    margin-bottom: 1.6rem;
  }
}
.family-box {
  margin-bottom: 1.6rem;
  @include shadow;
  padding: 2.4rem 1.6rem 1.6rem;
  border-radius: 0.8rem;
  .title-wrap {
    @include flexbox;
    justify-content: space-between;
    h4 {
      @include title(h5);
    }
    .btn-wrap {
      @include flexbox;
      justify-content: space-between;
      gap: 0.8rem;
      button {
        svg {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
  }
  .btn-box {
    @include flexbox;
    margin-top: 1.6rem;
    gap: 1rem;
    .ant-btn {
      flex: 0 1 100%;
    }
  }
}
</style>
