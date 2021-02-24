import Vue from 'vue'
import axios from 'axios';
import { Message } from 'element-ui'
import { showLoading, hideLoading } from "./loading"
// const qs = require('qs');


var xy = window.location.protocol; //获取协议
var zj = window.location.host; //获取主机
// var baseURL = xy + '//' + zj; // 完整地址
const baseUrl = 'http://192.168.1.6:8888'; //办公室







var service = axios.create({
  onUploadProgress: (progressEvent) => {
  },
  baseURL: baseUrl,
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' }
});
service.interceptors.request.use(
  // 设置token
  config => {
    // config.headers["Content-Type"] = "application/json;charset=UTF-8";
    if (config.loading != false) {
      showLoading()
    }
    const sessionId = window.localStorage.getItem("token");
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    if (sessionId) {
      config.headers["oil_access_token"] = sessionId;
    }
    return config;
  },
  error => {
    hideLoading();
    return Promise.reject(error);
  });
service.interceptors.response.use(
  response => {
    hideLoading();
    const status = response.status;
    const data = response.data;
    if (status != 200) {
      return Promise.reject(error);
    } else if (data.code === -8) {//-8 token失效
      localStorage.removeItem('userinfo');
      Message({
        message: data.msg || data.message || "",
        type: 'error',
        offset: 200,
        duration: 1500,
        onClose: function () {
          window.location.href = "/#/login";
        }
      });
      return;
    } else if (data.code === 1) {
      return data;
      // } else if (data.code === -8 || data.code === -1) {
    } else if (data.code === -8) {
      localStorage.removeItem('userinfo');
      Message({
        message: data.msg || data.message || "",
        type: 'error',
        offset: 200,
        duration: 1500,
        onClose: function () {
          window.location.href = "/#/login";
        }
      });
      return
    } else {
      Message({
        message: data.msg || data.message || "操作失败",
        type: 'warning',
        offset: 200,
        duration: 1500
      });
      return data;
    }
    // else
    //   if (data.code === -1 || data.code == 9009) { //-1未登录，9009token失效
    //     localStorage.removeItem('userinfo');
    //     Message({
    //       message: data.msg || data.message || "",
    //       type: 'error',
    //       offset: 200,
    //       duration: 1500,
    //       onClose: function () {
    //         window.location.href = "/#/login";
    //       }
    //     });
    //     return;
    //   }   
  },
  error => {
    hideLoading();
    Message({
      message: "网络超时,请稍后重试",
      type: 'error',
      duration: 1500,
      offset: 200,//
      onClose: function () {
      }
    });
    return Promise.reject(error)
  }
);

export default service;