<template>
  <u-navbar title="" :fixed="false">
    <template #left>
      <div><span>{{ title }}</span><span class="related">{{ userStore.userName }}</span></div>
    </template>
  </u-navbar>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
withDefaults(defineProps<{ title?: string }>(), { title: 'helllo' })
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.related {
  @apply text-28rpx text-[#727477] font-500 whitespace-nowrap ml-16rpx;
}
</style>
