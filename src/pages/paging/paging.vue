<!-- 普通模式演示(vue3+setup) -->
<script setup>
import { ref } from 'vue'

const request = {
  queryList(params) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const list = []
        for (let i = 0; i < params.pageSize; i++) {
          list.push({
            title: `标题${params.pageNo}-${i}`,
            detail: `详情${params.pageNo}-${i}`,
          })
        }
        resolve({
          data: {
            list,
            total: 100,
          },
        })
      }, 1000)
    })
  },
}

const paging = ref(null)

const tabIndex = ref(0)
// v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
const dataList = ref([])

// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用paging.value.reload()即可
function queryList(pageNo, pageSize) {
  // 组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
  // 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
  // 模拟请求服务器获取分页数据，请替换成自己的网络请求
  const params = {
    pageNo,
    pageSize,
    type: tabIndex.value + 1,
  }
  request.queryList(params).then((res) => {
    // 将请求的结果数组传递给z-paging
    paging.value.complete(res.data.list)
  }).catch(() => {
    // 如果请求失败写paging.value.complete(false);
    // 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
    // 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
    paging.value.complete(false)
  })
}
</script>

<template>
  <z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top" -->
    <!-- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误 -->
    <template #top>
      <HNavBar title="sdfsdfsd" :placeholder="true" />
      <!-- <z-tabs :list="tabList" @change="tabsChange" /> -->
    </template>
    <!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
    <view v-for="(item, index) in dataList" :key="index" class="item">
      <view class="item-title">
        {{ item.title }}
      </view>
      <view class="item-detail">
        {{ item.detail }}
      </view>
      <view class="item-line" />
    </view>
  </z-paging>
</template>

<style>
.item {
  z-index: 1;
  position: relative;
  height: 150rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rpx 30rpx;
}

.item-detail {
  z-index: 1;
  padding: 5rpx 15rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
  color: white;
  background-color: #007AFF;
}

.item-line {
  position: absolute;
  bottom: 0rpx;
  left: 0rpx;
  height: 1px;
  width: 100%;
  background-color: #eeeeee;
}
</style>
