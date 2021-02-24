import Vue from 'vue'

const _this = Vue.prototype;
let loadingInstance;
// loading框设置局部刷新，且所有请求完成后关闭loading框
function startLoading(text) {
  const options = {
    target: document.querySelector(".main-loading"),
    background: "rgba(0, 0, 0, 0.2) !important",
    body: false,
    text: text||"加载中",
    lock: true,
  };
  loadingInstance = _this.$loading(options);
}
function endLoading() {
  loadingInstance.close();
}

//请求计数
let needLoadingRequestCount = 0;
function showLoading(text) {
  if (needLoadingRequestCount === 0) {
    startLoading(text);
  }
  needLoadingRequestCount++;
};
function hideLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {//说明返回全部完成
    endLoading();
  }
};


export {showLoading,hideLoading}