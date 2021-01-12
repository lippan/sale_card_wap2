import request from '../assets/Js/http'
// 登陆接口
export function LoginApi (params) {
    return request({
      url: `/api/ApiLogin/PostCheckUserPassword+${params}`,
      method: 'post'
    })
  }

  // 保存审核弹框的内容
export function SaveApprovalApi (data) {
  return request({
    url: `api/ApiProcessExecute/PostExecuteApply`,
    method: 'post',
    data: data
  })
}