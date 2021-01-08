<template>
    <div>
        <van-cell-group style="margin-top:10px;">
            <van-cell title="姓名" value="张三"/>
            <van-cell title="星级" value="三星"/>
            <van-cell title="账号" value="15223658562" is-link/>
            <van-cell title="联系QQ" value="三星" is-link/>
            <van-cell title="手机号" value="三星" is-link/>
            <van-cell title="修改登录密码" is-link @click="getChangePassword"/>
            <van-cell title="解除绑定" is-link @click="removeBind"/>
        </van-cell-group>
    </div>
</template>
<script>
export default {
    methods:{
        // 修改密码
        getChangePassword() {
            this.$router.push({path:'/ChangePassword'})
        },
        removeBind() {
            this.$dialog.confirm({
                title: '提示',
                message: '确定解除绑定吗?',
            })
            .then(() => {
                // on confirm
            })
            .catch(() => {
                // on cancel
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>