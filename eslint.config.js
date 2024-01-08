const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  overrides: {
    vue: {
      'vue/component-name-in-template-casing': ['off'],
    },
  },
  ignores: ['src/uni_modules/**/*'],
})
