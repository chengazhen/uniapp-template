<script setup lang="ts">
import { getOpenID } from '@/api/home'
import NavBar from '@/components/NavBar.vue'

getOpenID({
  code: '',
}).then((res) => {
  console.log(res)
})

const name = 'home'
</script>

<template>
  <div class="h-100vh">
    <NavBar />
    <UButton type="primary">
      提交
    </UButton>
    <u-badge type="error" value="3" max="99" />
    <u-back-top :scroll-top="120" :top="100" />
    <div class="text-28rpx">
      sdfsdfsdfs
    </div>
  </div>
</template>

<style lang="scss"></style>
