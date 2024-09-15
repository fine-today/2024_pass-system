<template>
  <div>
    <ConBox class="box1 padding-t-16 padding-b-16" bordered="bottom">
      <h3 class="h6">
        내위치지키미 서비스를<br />
        이용해 보세요.
      </h3>
      <p class="p2">서비스 사용을 위하여 약관에 동의해 주세요</p>
    </ConBox>

    <ConBox class="box2">
      <h3 class="padding-t-8 padding-b-16">
        <a-checkbox v-model:checked="checked" class="p1 round"
          >서비스 필수 항목 모두 동의</a-checkbox
        >
      </h3>
      <ul class="agree-list">
        <li>
          <a-checkbox v-model:checked="checked" class="p2"
            >(필수) 서비스 이용약관</a-checkbox
          >
          <button type="button" class="agree-more">보기</button>
        </li>
        <li>
          <a-checkbox v-model:checked="checked" class="p2"
            >(필수) 개인정보 수집 및 이용 동의</a-checkbox
          >
          <button type="button" class="agree-more">보기</button>
        </li>
        <li>
          <a-checkbox v-model:checked="checked" class="p2"
            >(필수) 위치기반 서비스 이용 약관</a-checkbox
          >
          <button type="button" class="agree-more">보기</button>
        </li>
      </ul>
    </ConBox>
  </div>
  <!--<template #footer>
    <BtnList>
      <a-button type="border" size="large">취소</a-button>
      <a-button type="primary" size="large">가입</a-button>
    </BtnList>
  </template>-->
</template>

<script setup>
//import BtnList from "@/components/BtnList.vue";
import ConBox from "@/components/ConBox.vue";
</script>

<style lang="scss" scopped>
.agree-list {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  li {
    padding: 0.8rem 0 0.8rem;
    @include flexbox;
    justify-content: space-between;
    .agree-more {
      @include title(caption1);
      @include color(color, gray-600);
      text-decoration: underline;
    }
  }
}
.box1 {
  .p2 {
    @include color(color, gray-600);
  }
}
.box2 {
  h3 {
    border-bottom: 1px solid;
    @include color(border-color, gray-100);
  }
}
.ant-checkbox-wrapper {
  font-family: "pretendard", "NotoKr", "Malgun Gothic", "맑은 고딕", Dotum,
    "돋움", Helvetica, AppleSDGothicNeo, sans-serif;

  &.round {
    .ant-checkbox {
      .ant-checkbox-inner {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid;
        @include color(border-color, black);
        &::after {
          display: block;
          width: 1.6rem;
          height: 1.6rem;
          transform: none;
          opacity: 1;
          border: 0;
          position: static;
          @include imgBg(contain, "@/assets/images/components/check-on.svg");
        }
      }
    }
    .ant-checkbox-checked {
      @include color(background-color, black);
      border-radius: 50%;
      .ant-checkbox-inner {
        &::after {
          @include imgBg(contain, "@/assets/images/components/check-off.svg");
        }
      }
    }
  }
  &:hover .ant-checkbox-checked .ant-checkbox-inner,
  &:focus .ant-checkbox-checked .ant-checkbox-inner,
  &:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner,
  &:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-inner,
  .ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner {
    border: 0;
    background-color: transparent;
  }
  .ant-checkbox {
    border: transparent;
    .ant-checkbox-inner {
      @include flexbox;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-color: transparent;
      background-color: transparent;
      &::after {
        display: block;
        width: 2rem;
        height: 2rem;
        transform: none;
        opacity: 1;
        border: 0;
        position: static;
        @include imgBg(contain, "@/assets/images/components/check-off.svg");
      }
    }
  }
  .ant-checkbox-checked {
    border: transparent;
    .ant-checkbox-inner {
      border: 0;
      background-color: transparent;
      &::after {
        @include imgBg(contain, "@/assets/images/components/check-on.svg");
      }
    }
  }
}
</style>
