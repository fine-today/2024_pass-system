<template>
  <SimpleLayout>
    <template #default>
      <ConBox class="box1 align-center">
        <p class="p1">
          내위치지키미 서비스<br />
          가입이 완료되었습니다.
        </p>
      </ConBox>
    </template>
    <template #footer>
      <BtnList>
        <a-button type="primary">확인</a-button>
      </BtnList>
    </template>
  </SimpleLayout>
</template>

<script setup>
import BtnList from "@/components/BtnList.vue";
import ConBox from "@/components/ConBox.vue";
import SimpleLayout from "@/components/includes/layout/SimpleLayout.vue";
</script>

<style scoped>
.box1 {
  padding-top: 24vh;
}
</style>
