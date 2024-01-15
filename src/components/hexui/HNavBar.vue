<script setup lang="ts">
import pages from '@/pages.json'

const routes = getCurrentPages()
const showHomeBtn = computed(() => {
  return routes.length < 2 && !isTabbarPath()
})

function isTabbarPath() {
  return pages.tabBar.list.some((item) => {
    return item.pagePath === routes[routes.length - 1].route
  })
}

function goHome() {
  uni.switchTab({
    url: '/pages/home/home',
  })
}

function goBack() {
  if (routes.length < 2) {
    goHome()
    return
  }
  uni.navigateBack({
    delta: 1,
  })
}
</script>

<template>
  <u-navbar v-bind="$attrs">
    <template #left>
      <view class="u-nav-slot">
        <u-icon v-if="!isTabbarPath()" name="arrow-left" size="19" @click="goBack" />
        <template v-if="showHomeBtn">
          <u-line direction="column" :hairline="false" length="16" margin="0 8px" />
          <u-icon name="home" size="20" @click="goHome" />
        </template>
      </view>
    </template>
  </u-navbar>
</template>

<style lang="scss" scoped>
.u-page {
  padding: 0;
  flex: 1;
  background-color: $u-bg-color;

  &__item {

    &__title {
      color: $u-tips-color;
      background-color: $u-bg-color;
      padding: 15px;
      font-size: 15px;

      &__slot-title {
        color: $u-primary;
        font-size: 14px;
      }
    }
  }
}

.u-nav-slot {
  @include flex;
  align-items: center;
  justify-content: space-between;
  border-width: 0.5px;
  border-radius: 100px;
  border-color: $u-border-color;
  padding: 3px 7px;
  opacity: 0.8;
}
</style>
