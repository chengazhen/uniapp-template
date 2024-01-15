<script setup lang="ts">
import pages from '@/pages.json'

type PageType = typeof pages.tabBar.list[0]

const props = withDefaults(defineProps<{
  value: string
}>(), {
  value: '',
})

function navigateTo(path: string) {
  uni.switchTab({
    url: `/${path}`,
  })
}

const isHttp = (url: string): boolean => /^http?:\/\//.test(url)
function iconPath(page: PageType) {
  if (props.value === page.pagePath)
    return isHttp(page.selectedIconPath) ? page.selectedIconPath : `/${page.selectedIconPath}`

  return isHttp(page.iconPath) ? page.iconPath : `/${page.iconPath}`
}
</script>

<template>
  <u-tabbar
    v-bind="$attrs"
  >
    <u-tabbar-item v-for="item in pages.tabBar.list" :key="`${item.pagePath}`" :text="item.text" :name="item.pagePath" :icon="iconPath(item)" @click="navigateTo(item.pagePath)" />
  </u-tabbar>
</template>

<style lang="scss"></style>
