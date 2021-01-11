<template>
    <div>
        <van-cell is-link center @click="getUserInfor">
            <div class="div-flex user-title">
<<<<<<< HEAD
                <img src="../../assets/img/head_icon_2.png" alt="/">
=======
                <img src="../../assets/code/head_icon_2.png" alt="/">
>>>>>>> c676375a04c8c813d1366412360981c0602e8677
                <div class="user-infor">
                    <p>张三</p>
                    <p>15200253654</p>
                </div>
            </div>
        </van-cell>
        <van-cell-group style="margin-top:10px;">
            <van-cell title="我的问题工单" icon="coupon-o" is-link icon-color="#1989fa"/>

            <van-cell title="退款与罚款" icon="gold-coin-o" is-link/>
        </van-cell-group>
    </div>
</template>
<script>
export default {
    methods:{
        getUserInfor(){
            this.$router.push({path:'/UserInfor'})
        }
    }
}
</script>
<style lang="less" scoped>
.div-flex{
    display: flex;
    // justify-content: space-between;
    align-items: center;
}
.user-title{
    img{
        height: 70px;
    }
    .user-infor{
        margin-left:10px;
    }
}
</style>