import request from "@/util/request";
// 登录
export const password = (data) => {
  return request({
    url: "/sys/auth/password",
    method: "post",
    data
  })
}
