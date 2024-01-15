<script setup lang="ts">
import { getOpenID } from '@/api/home'

getOpenID({
  code: '',
}).then((res) => {
  console.log(res)
})

const name = 'home'

function goPaging() {
  uni.navigateTo({
    url: '/pages/paging/paging',
  })
}
</script>

<template>
  <div class="">
    <HNavBar title="sdfsdfsd" :placeholder="true" />
    <div class="text-28rpx">
      sdfsdfsdfs
    </div>
    <div @click="goPaging">
      sdfsdfsdf
    </div>
  </div>
</template>

<style lang="scss"></style>
