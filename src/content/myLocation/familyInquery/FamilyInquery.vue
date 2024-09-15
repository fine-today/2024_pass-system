<template>
  <BaseLayout>
    <template #default>
      <ConTab />
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
              <button type="button" class="modify"><SvgModify /></button>
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
        <a-button type="primary" size="large" class="w100p">등록</a-button>
      </ConBox>
    </template>
  </BaseLayout>
</template>

<script setup>
import ConBox from "@/components/ConBox.vue";
import ConTab from "@/components/includes/content/ConTab.vue";
import BaseLayout from "@/components/includes/layout/BaseLayout.vue";
import SvgModify from "@/components/images/SvgModify.vue";
import SvgDelete from "@/components/images/SvgDelete.vue";
</script>

<style lang="scss" scoped>
.con-header {
  padding-top: 1.6rem;
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
