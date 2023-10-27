
interface HttpConfig {
  method: string
  data: any
  url: string
}

const messageMap: Record<number, string> = {
  200: '请求成功',
  400: '请求参数错误',
  401: '登录过期',
  403: '没有权限',
  404: '请求资源不存在',
  500: '服务器错误',
}

function http(config: HttpConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    let message: string = '';
    let setting: UniNamespace.RequestOptions = {
      url: '',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      timeout: 100000,
      success: ({ statusCode, data }) => {
        if (statusCode === 200) {
          resolve(data);
        } else {
          const message = messageMap[statusCode] || '未知错误';
          reject(message);
        }
      },
      fail: (err) => {
        message = '请稍后重试'
        reject(err);
      },
      complete() {
        if (message) {
          uni.showToast({
            message,
            icon: 'none'
          })
        }
      }
    }

    setting = Object.assign(setting, config);
    // 修改url localhost/api/xxx..x. 后台cors处理 
    setting.url = import.meta.env.VITE_BASE_API + setting.url;
    // 发送请求 
    uni.request(setting);
  })
}

export {
  http
};

