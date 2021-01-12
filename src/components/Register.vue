<template>
  <div class="container">
    <p class="login-title">
      基本信息
    </p>
    <van-form @submit="onSubmit">
      <van-field v-model="userInfor.mobile" type="tel" label="手机号" required clearable :rules="[{required: true, message: '请输入手机号'}]"/>
      <van-field
        v-model="userInfor.piccode"
        center
        clearable
        label="图形验证"
        style="padding-top:0;padding-bottom:0;"
        :rules="[{required: true, message: '请输入验证码'},{ validator, message: '验证码不正确，请重新输入' }]"
      >
        <div class="code" @click="refreshCode" slot="button">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </van-field>
      <!--<van-field
        v-model="userInfor.sms"
        center
        clearable
        label="短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>-->
    <van-field v-model="userInfor.password" type="password" label="设置密码" required  clearable :rules="[{required: true, message: '请输入密码'}]" />
    <van-field v-model="userInfor.repassword" type="password" label="确认密码" required clearable :rules="[{required: true, message: '请输入确认密码'}]"/>
    <van-field v-model="userInfor.qq" type="digit" label="QQ" clearable/>
    <div class="other-infor">
        <span class="col-green">支付宝信息</span>
        <p>            
            以下是您的收款信息，请认真填写，如果因为个人原因导致无法收款，后果自负。           
        </p>
    </div>
    <van-field v-model="userInfor.alipay_name" label="支付宝姓名" clearable/>
    <van-field v-model="userInfor.alipay_account" label="支付宝账号" clearable/>
    <div class="pdtl2016">
        <van-checkbox v-model="checked" checked-color="#07c160" class="regis-check">已阅读并接受<a href="javascript:" @click="getAgreement">《mf178闲置资源转让协议》</a></van-checkbox>
        <van-button block type="primary" native-type="submit" style="margin-top:20px;">注册</van-button>
    </div>    
    <div class="login-href">
        <span>已有账号 ? <a href="javascript:void(0);" class="login-register" @click="getLogin">去绑定</a></span>
    </div>
</van-form>
  </div>
</template>

<script>
    import {RegistApi} from '../api/login'
import SIdentify from '@/components/Base/identify'
export default {
  name: 'Register',
  data () {
    return {
        userInfor:{
            mobile:'',
            piccode:'',
            sms:'',
            password:'',
            repassword:'',
            qq:'',
            alipay_name:'',
            alipay_account:'',
        },

      checked:false,
      identifyCodes: "1234567890",
      identifyCode: ""
    }
  },
  methods: {
    onSubmit() {
        RegistApi(this.userInfor).then((res)=>{
            if(res.data.code === 2000) {
                console.log(res)
                this.$router.push({path:'/Index'})
            }
        }).catch((err)=>{
            console.log(err)
        })
    },
    // 跳转至登录页
    getLogin() {
      this.$router.push({path:'/'})
    },
    getAgreement() {
      this.$router.push({path:'/Agreement'})
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
  .van-cell,.van-button--normal{
    font-size:16px;
  }
}
.col-green{
    color: #339966;
}
.login-title{
    padding:10px 15px;
    color: #339966;
}
.login-href{
  text-align: right;
  padding:10px 16px 20px 16px;
}
.login-register{
  color:#3581B9;
  cursor: pointer;
}
.other-infor{
    padding:20px 10px 10px 15px;
    span{
        padding-bottom:5px;
        display:block;
    }
    p{
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 10px;
        color: #8f8f94;
    }
}
.pdtl2016{
    padding:20px 16px;
}
.regis-check{
    a{
        color:#007aff;
    }
}
.code {
  margin: 0px auto;
  width: 114px;
  height: 40px;
  border: 1px solid #00B4FF;
}
</style>
