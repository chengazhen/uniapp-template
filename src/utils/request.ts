import { LYLA_ERROR, createLyla } from 'lylajs-uni'
import type { LylaResponseError } from 'lylajs-uni'

const { lyla } = createLyla({
  baseUrl: 'https://api.github.com',
  context: null,
  hooks: {
    onBeforeRequest: [(o) => {
      return o
    }],
    onResponseError: [(e) => {
      handleError(e)
    }],
  },
})

function handleError(e: LylaResponseError<null>) {
  switch (e.type) {
    case LYLA_ERROR.HTTP:
      uni.showToast({
        title: 'http错误',
        icon: 'none',
      })
      break
    case LYLA_ERROR.NETWORK:
      uni.showToast({
        title: '网络错误',
        icon: 'none',
      })
      break
    case LYLA_ERROR.TIMEOUT:
      uni.showToast({
        title: '请求超时',
        icon: 'none',
      })
      break
    case LYLA_ERROR.ABORTED:
      uni.showToast({
        title: '请求取消',
        icon: 'none',
      })
      break
    default:
      break
  }
}

export {
  lyla,
}
