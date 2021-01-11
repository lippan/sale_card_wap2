import request from '../assets/Js/http'
// 登陆接口
export function LoginApi (params) {
    return request({
      url: '/api/ApiLogin/PostCheckUserPassword' + params + '&sysCode = 1',
      method: 'post'
    })
  }