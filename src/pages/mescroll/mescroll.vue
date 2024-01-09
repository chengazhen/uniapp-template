<!-- 此处不好用 -->
<script setup lang="ts">
import { ref } from 'vue'
import { onPageScroll, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'

// @ts-expect-error 未安装
import useMescroll from '@/uni_modules/mescroll-uni/hooks/useMescroll.js'
import mescrollBody from '@/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue'

// 数据列表
const total = ref(0)
// 调用mescroll的hook (注: mescroll-uni不用传onPageScroll,onReachBottom, 而mescroll-body必传)
// 此处的钩子都是一些回调的默认实现, 可以不传, 也可以自定义实现, 此处官网的 demo 虽然是 hooks 实现 还是 mixin 的思想
const { mescrollInit, getMescroll } = useMescroll(onPageScroll, onReachBottom, onPullDownRefresh)
function downCallback() {
  if (total.value === 0)
    return

  setTimeout(() => {
    total.value = 20
    getMescroll().resetUpScroll(false)
  }, 1000)
}

function upCallback() {
  setTimeout(() => {
    total.value += 40
    getMescroll().endSuccess(20, !(total.value > 100))
  }, 1000)
}
</script>

<template>
  <mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback">
    <div v-for="item in total" :key="item">
      {{ item }}
    </div>
  </mescroll-body>
</template>

<style lang="scss"></style>
