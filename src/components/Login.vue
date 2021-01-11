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
        :rules="[{required: true, message: '请输入验证码'},{ validator, message: '验证码不正确，请重新输入' }]"
      >
        <div class="code" @click="refreshCode" slot="button">
          <s-identify :identifyCode="identifyCode"></s-identify>
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
import SIdentify from '@/components/Base/identify'
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:'',
      sms:'',
      identifyCodes: "1234567890",
      identifyCode: ""
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({path:'/Index'})
      window.localStorage.setItem('token','');
    },
    // 跳转至注册页
    getRegister() {
      this.$router.push({path:'/Register'})
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      // console.log(this.identifyCode);
    },
    // 验证图形验证码
     validator(val) {
       if(this.identifyCode === val){
         return true;
       }else {
         return false
       }
    },
  
  },
  mounted(){
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4)
  },
  components:{SIdentify}
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
.code {
  margin: 0px auto;
  width: 114px;
  height: 40px;
  border: 1px solid #00B4FF;
}
</style>
