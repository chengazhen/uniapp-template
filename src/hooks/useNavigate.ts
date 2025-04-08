import { useIsLogin } from './useIsLogin'

/**
 * @description 跳转页面的函数, 在里面添加了判断是否登录
 * @returns
 */
export function useNavigate() {
  function verifyLoginNavigate(options: UniApp.NavigateToOptions) {
    const { isLogin } = useIsLogin()
    if (isLogin())
      return uni.navigateTo(options)

    // 去登录
  }
  return {
    navigate: verifyLoginNavigate,
  }
}
