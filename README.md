## uniapp + vite + vue3.0 + typescript

* uview-plus
* unocss
* pinia
* pinia-plugin-persistedstate
* vue-i18n
* lyla-uni 请求插件
* z-paging 上拉加载下拉刷新

### 待办

- [ ] 增加 mescroll 使用示例

### 注意

+ pinia 需要固定的版本使用， 才能兼容到 uniapp; 使用 taze 更新依赖时 taze --exclude pinia

+ eslint 规则有可能需要再 setting.json 中配置 `"eslint.experimental.useFlatConfig": true`

+ mescroll 在编写demo的过程中感觉到还有很多需要优化的地方, 这里只涉及到了 mescrollBody, 在使用的过程中发现首次触发式, 下拉加载和上拉加载都会触发
