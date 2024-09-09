<template>
  <BaseLayout>
    <template #default>
      <ConBox class="box1 align-center padding-t-32">
        <h2 class="p3">내위치지키미</h2>
        <p class="p1 padding-t-12">
          등록한 비밀번호를<br />
          입력해주세요.
        </p>
        <div class="password-input">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </ConBox>
    </template>
    <template #footer>
      <a class="forgot-password">비밀번호를 잊어버리셨나요?</a>
      <NumberPad />
    </template>
  </BaseLayout>
</template>

<script setup>
import ConBox from "@/components/ConBox.vue";
import BaseLayout from "@/components/includes/layout/BaseLayout.vue";
import NumberPad from "@/components/NumberPad.vue";
</script>

<style lang="scss" scoped>
.box1 {
  h2 {
    @include color(color, red-500);
  }
  p {
    font-weight: 500;
  }
  .password-input {
    @include flexbox;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 2.8rem;
    i {
      width: 1rem;
      height: 1rem;
      border: 1px solid;
      @include color(border-color, black);
      border-radius: 50%;
      &.full {
        @include color(background-color, gray-400);
        @include color(border-color, gray-400);
      }
    }
  }
}
.footer {
  .forgot-password {
    text-align: center;
    @include title(p1);
    text-decoration: underline;
    margin-bottom: 2rem;
    @include color(color, gray-400);
  }
}
</style>
