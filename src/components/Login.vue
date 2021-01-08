<template>
  <div class="container">
    <p class="login-title">
      请输入蜜蜂账号，完成绑定
    </p>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="账号"
        placeholder="登录账号"
        clearable
        :rules="[{ required: true, message: '请填写登录账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="登录密码"
        clearable
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="验证码"
        placeholder="请输入验证码"
        style="padding-top:0;padding-bottom:0;"
      >
        <div slot="button">
          <img src="../assets/code/captcha1.jpg" alt="/" style="vertical-align:middle">
        </div>
      </van-field>
      <van-cell class="login-submit">
        <van-button block type="primary" native-type="submit">确认绑定账号</van-button>
      </van-cell>
      <div class="login-href">
        <span>没有账号 ? <a href="javascript:void(0);" class="login-register" @click="getRegister">去注册</a></span>
      </div>
</van-form>
    <div class="login-foot">
        <p>说明:</p>
        <p>绑定蜜蜂账号后，可收取平台工单跟新情况信息</p>
        <p>其他友情提示陆续开放中
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:'',
      sms:''
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({path:'/Index'})
    },
    // 跳转至注册页
    getRegister() {
      this.$router.push({path:'/Register'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.container{
  padding:10px;
  .login-submit{
    &:after{
      border-bottom: none;
    }
  }
  // .van-cell,.van-button--normal{
  //   font-size:16px;
  // }
}
.login-title{
    padding-bottom:10px;
    color: #8C8C8C;
}
.login-href{
  background:#fff;
  text-align: right;
  padding:10px 16px 20px 16px;
}
.login-register{
  color:#3581B9;
  cursor: pointer;
}
.login-foot{
  padding-top:5px;
  p {
    padding:5px 0;
    color:#8C8C8C;
  }
}
</style>
