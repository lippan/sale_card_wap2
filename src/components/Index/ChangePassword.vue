<template>
    <div class="container">
        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field v-model="oldPassword" label="原密码" placeholder="原密码" />
                <van-field v-model="newPassword" label="新密码" placeholder="新密码" />
                <van-field v-model="confirmPassword" label="确认密码" placeholder="确认密码" />
            </van-cell-group>
            <div class="submit-btn">
                <van-button block type="info" native-type="submit">提交</van-button>
            </div>
            
        </van-form>
    </div>
</template>
<script>
export default {
    data() {
        return{
            oldPassword:'',
            newPassword:'',
            confirmPassword:''
        }
    },
    methods:{
        onSubmit() {
            if(this.newPassword!==this.confirmPassword){
                this.$dialog.alert({
                    message: '新密码与确认密码不一致，请重新输入',
                }).then(() => {
                    
                });
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    background:#f9f9f9;
    height: 100vh;
    .submit-btn{
        margin-top:20px;
        padding:0 15px;
    }
}

</style>