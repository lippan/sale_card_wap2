<template>
    <div>
        <router-view class="route"/>
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/FirstPage">首页</van-tabbar-item>
            <van-tabbar-item icon="cash-on-deliver">钱包</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">我要买卡</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/UserIndex">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return{
            active:0
        }
    }
    
}
</script>
<style lang="less" scoped>
.route{
    padding-bottom:50px;
}
</style>