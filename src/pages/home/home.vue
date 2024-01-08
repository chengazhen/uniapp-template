<template>
  <div class="">
    <NavBar />
    <div class="text-28rpx">sdfsdfsdfs</div>
  </div>
</template>

<script setup lang="ts">
import { getOpenID } from '@/api/home';
import NavBar from '@/components/NavBar.vue';
getOpenID({
  code: ''
}).then(res => {
  console.log(res);
});

const name = 'home';
</script>

<style lang="scss"></style>
