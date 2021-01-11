<template>
    <div>
        <van-cell class="Apply-title">
            申请其他卡种
        </van-cell>
        <van-field v-model="text" label="卡的名称" placeholder="请填写卡的名称" clearable/>
        <van-field v-model="text" label="可出售量" placeholder="请填写大概一个月有多少量" clearable/>
        <van-field v-model="text" label="卡的来源" placeholder="请填写卡的来源" clearable/>
        <van-field v-model="text" label="联系人" placeholder="请填写联系人" clearable/>
        <van-field v-model="text" label="联系方式" placeholder="请填写联系方式" clearable/>
        <van-cell>
            <van-button block type="info" native-type="submit">确认</van-button>
        </van-cell>
    </div>
</template>
<script>
export default {
    data() {
        return{
            text:''
        }
        
    }
}
</script>
<style lang="less" scoped>
.Apply-title{
    font-size:18px;
    color:#777;
}
</style>