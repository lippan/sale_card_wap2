import axios from "axios";
import deveEnvJs from "../../../config/dev.env.js";
import prodenvjs from "../../../config/prod.env.js";
import router from "../../router/router";
import { Dialog  } from 'vant'; // vant组件

var source = axios.CancelToken.source();
var request = axios.create({
  baseURL: process.env.API_ROOT, //服务器接口地址及端口
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  // }
  },
  timeout: 5000 //设置主动请求时间，超过这个时间则放弃请求，响应失败
});
// let loading; // 定义全局loading变量

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    window.localStorage.setItem('loading',true);
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.token = window.localStorage.getItem('token') || "";
    return config;
  },

  err => {
    window.localStorage.setItem('loading',false); // 关闭loading动画
    Dialog({ message: '请求失败' });
    return Promise.reject(err);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    window.localStorage.setItem('loading',false); // 关闭loading动画
    if (response.data.StatusCode !== 2000) {
      //code为非200是抛错 可结合自己业务进行修改
      if (response.data.StatusCode === 4001) {
        // 401 因token错误而退出登陆;
        Dialog({ message: '账户在其他平台登陆，退出登录' });
        router.push("/"); // 跳回登录页
      } else if (response.data.StatusCode === 4001) {
        Dialog({ message: '该账号已被禁用，退出登录' });
        router.push("/"); // 跳回登录页
      } else if (response.data.StatusCode === 500) {
        // 500 消息显示
        Dialog({ message: response.data.MsgText });
      } else if (response.data.StatusCode === 500500) {
        // 500 消息显示
        // router.push('/Page500');
        console.log(response);
      }
      return response;
    } else {
      return response;
    }
  },
  err => {
    window.localStorage.setItem('loading',false); // 关闭loading动画
    err.status === 4001 ? router.push("/") : console.log(err);
    return Promise.reject(err);
  }
);

export default request;
