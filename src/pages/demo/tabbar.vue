<script setup lang="ts">
onShow(() => {
  uni.hideTabBar()
})
</script>

<template>
  <div class="">
    <HNavBar title="tabbar" />

    <HTabBar value="pages/demo/tabbar" />
  </div>
</template>

<style lang="scss"></style>
