<template>
    <div>
        <van-row>
            <van-col span="8">
                <ul class="left-select">
                    <li @click="changeItem('one')" :class="{'activeType':active==='one'}">石化卡密</li>
                    <li @click="changeItem('two')" :class="{'activeType':active==='two'}">电商商超卡</li>
                    <li @click="getApply">申请其他卡种</li>
                </ul>
            </van-col>
            <van-col span="16" class="bg-white">
                <ul class="right-item" v-if="active==='one'">
                    <li @click="getDetailTask">
                        <span class="icon-img">
                            <img src="../../assets/code/oil.png">
                        </span>
                        中石化加油卡
                    </li>
                    <li>
                        <span class="icon-img">
                            <img src="../../assets/code/oil.png">
                        </span>
                        中石化纯卡密
                    </li>
                    <li>
                        <span class="icon-img">
                            <img src="../../assets/code/cardicon_1558339431.png">
                        </span>
                        移动充值卡密
                    </li>
                </ul>
                <ul class="right-item" v-if="active==='two'">
                    <li>
                        <span class="icon-img">
                            <img src="../../assets/code/cardicon_1558338134.png">
                        </span>
                        杉德购物卡                                                                                           
                    </li>
                    <li>
                        <span class="icon-img">
                            <img src="../../assets/code/cardicon_1558338206.png">
                        </span>
                        壹卡会                                                                                           
                    </li>
                    <li>
                        <span class="icon-img">
                            <img src="../../assets/code/cardicon_1558338079.png">
                        </span>
                        纸质的万里通券                                                                                                                                                                                      
                    </li>
                    
                </ul>
            </van-col>
        </van-row>
        <!-- <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
            <template #content>
                <ul v-if="active === 0">
                    <li>中石化加油卡</li>
                    <li>中石化纯卡密</li>
                </ul>
                <ul v-if="active === 1">
                    <li>杉德购物卡</li>
                </ul>
            </template>
        </van-tree-select> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 'one',
            items: [{ text: '石化卡密' }, { text: '电商商超卡' }, { text: '申请其他卡种' }],
        };
    },
    methods:{
        changeItem(item){
            this.active = item;
        },
        // 跳转至申请页
        getApply() {
            this.$router.push({path:'/Apply'});
        },
        // 跳转至myTask页
        getDetailTask() {
            this.$router.push({path:'/MyTask'});
        }
    }
}
</script>
<style lang="less" scoped>
.left-select{
    li{
        height:12vw;
        line-height: 12vw;
        text-align: center;
        border-left:4px solid transparent;
        &.activeType{
            border-left:4px solid #007aff;
            color:#007aff;
        }
    }
}
.bg-white{
    background:#fff;
    height:100vh;
}
.right-item{
    li{
        height:6vw;
        line-height: 6vw;
        padding:3vw 6vw;
        .icon-img{
            display: inline-block;
            width:45px;
            img{
                width:100%;
                vertical-align: middle;
            }
        }
    }
}
</style>