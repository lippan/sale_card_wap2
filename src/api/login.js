import request from '../assets/Js/http'
// 登陆接口
export function LoginApi (params) {
    return request({
      url: `/member/login/index`,
      method: 'post',
        data:params
    })
  }

export function RegistApi (params) {
    return request({
        url: `/member/regist/index`,
        method: 'POST',
        data:params
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