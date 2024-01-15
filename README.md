## uniapp + vite + vue3.0 + typescript

* uview-plus
* unocss
* pinia
* pinia-plugin-persistedstate
* vue-i18n
* lyla-uni 请求插件
* z-paging 上拉加载下拉刷新

### 使用

#### 请求部分

接口请求使用的 lyla-uni, 基于开源插件开发的支持拦截的 uniapp 请求插件包。文件路径 `src/utils/request.ts`。关于请求和响应处理都已经实现

```typescript
const { lyla } = createLyla({
  baseUrl: 'https://api.github.com',
  context: null,
  hooks: {
    // 如果请求之前需要处理参数可以在这处理
    onBeforeRequest: [(o) => {
      return o
    }],
    // 错误处理
    onResponseError: [(e) => {
      handleError(e)
    }],
    // onAfterResponse 相应处理钩子
  },
})
```

api 封装格式

```typescript
import { lyla } from '@/utils/request'

export function getOpenID(data: { code: string }): Promise<any> {
  return lyla({
    method: 'POST',
    json: data,
    url: '/user/wxMiniProgram/sessionInfo',
  })
}

```

### 待办

- [x] 增加 mescroll 使用示例

### 注意

+ pinia 需要固定的版本使用， 才能兼容到 uniapp; 使用 taze 更新依赖时 taze --exclude pinia

+ eslint 规则有可能需要再 setting.json 中配置 `"eslint.experimental.useFlatConfig": true`

+ mescroll 在编写demo的过程中感觉到还有很多需要优化的地方, 这里只涉及到了 mescrollBody, 在使用的过程中发现首次触发式, 下拉加载和上拉加载都会触发

+ 使用自定义tabbar时避免页面闪烁 [参考](https://blog.csdn.net/weixin_43191327/article/details/135498300)

### 开发

#### 开发规范

关于 eslint，eslint选择了 @antfu/eslint-config 规则
