<template>
  <div>
    <div class="xx"></div>
    <br />
    <div class="aa"></div>
    <el-input v-model="yh" placeholder="请输入内容"></el-input>
    <br />
    <el-input v-model="mima" placeholder="请输入内容"></el-input>
    <br />
    <br />
    <br />
    <br />
    <el-button type="primary" @click="tijiao" plain>提交</el-button>
  </div>
</template>
<script>
import { password } from "@/api/login/index.js";
export default {
  data() {
    return {
      mima: "",
      yh: "",
    };
  },
  methods: {
    tijiao() {
      let objdatas = {
        yhm: "", //用户名
        yhmm: "", //用户密码
        xyhmm: "", //新用户密码
        qrmm: "", //确认密码
      };
      password(objdatas).then((res) => {
        // if (res.code == 1) {
        //   this.names = res.data;
        // }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.xx {
  width: 200px;
  height: 100px;
  background: red;
}
.aa {
  width: 2rem;
  height: 1rem;
  background: yellow;
}
</style>