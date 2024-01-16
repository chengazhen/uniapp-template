<script setup lang="ts">
import { getOpenID } from '@/api/home'

const props = defineProps({
  msg: {
    type: String,
    default: 'home',
  },
})
const emits = defineEmits(['update:msg'])
const value = useVModel(props, 'msg', emits)
getOpenID({
  code: '',
}).then((res) => {
})

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
      {{ value }}
    </div>
    <div @click="goPaging">
      sdfsdfsdf
    </div>
  </div>
</template>

<style lang="scss"></style>
