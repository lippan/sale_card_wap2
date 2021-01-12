<template>
    <div class="container">
        <div class="task-item">

            <div class="task-title">
                中石化加油卡
            </div>
            <p class="task-order">请先选择您要提交的面值</p>
            <ul class="price-list">               
                <li class="price-item">
                    <p class="price" @click="showPriceDialog">100元</p>
                    <p class="discount">98.3折</p>
                </li>
                <li class="price-item">
                    <p class="price">200元</p>
                    <p class="discount">98.3折</p>
                </li>
                <li class="price-item">
                    <p class="price">500元</p>
                    <p class="discount">98.3折</p>
                </li>
                <li class="price-item">
                    <p class="price">1000元</p>
                    <p class="discount">98.3折</p>
                </li>
            </ul>
        </div>
        <div class="task-item" style="margin-top:10px;">
            <p>
                <span class="task-order">回收记录</span>
                <span class="task-money">提现</span>
            </p>
            <div style="padding:0 10px 6px;">
                <span class="recyle-circle">7</span>回收记录
            </div>
        </div>
        <div style="margin: 15px 10px">
            <div style="color: #3399CC;font-size: 16px">业务说明：</div>
            <div class="page_tip">
                <p>
                    <span style="font-size: 16px;">
                        <strong>
                            <span style="color: rgb(255, 0, 0);"><br></span>
                        </strong>
                    </span>
                </p>
                <p>
                    <span style="font-size: 14px;">
                        <strong>
                            <span class="col-red">
                                您好，您的订单记录已经转移至右上角【我的 - 我的订单记录】，请前往【我的订单记录】页面查询您的订单信息噢！
                            </span>
                        </strong>
                    </span>
                </p>
                <p><br></p>
                <p>
                    <span class="col-red">
                        <span style="color: rgb(0, 0, 0); font-size: 16px;">
                            <strong>近期石化卡密提交量较大，核销时间延长，请您耐心等待！</strong>
                        </span>
                    </span>
                </p>
                <p>
                    <strong>
                        <span class="col-red"><br></span>
                    </strong>
                </p>
                <p>
                    <strong>
                        <span class="col-red">
                            石化卡密销卡每天维护时间：22:30-凌晨1:00&nbsp;
                        </span>
                    </strong>
                </p>
                <p>
                    <strong>
                        <span>销卡时间</span>
                    </strong>
                    <span>
                        ：正常5-15分钟，
                    </span>
                    <span>
                        如因网络异常、渠道维护或提交记录较多等情况，时间可能会有所延长。&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </span>
                </p>
                <p>
                    <span></span>
                </p>
                <p>
                    <strong>
                        <span>
                            温馨提示
                        </span>
                    </strong>
                    <span>
                        ：1、请确保提交的卡号卡密相匹配且真实有效，否则可能造成核销失败，给您带来损失！
                    </span>
                </p>
                <p>
                    <span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2、【中石化卡号+卡密】提交时会根据卡号验证面值，如通过卡号查验面值不符，订单会直接失败，请核实清楚后重新提交。
                    </span>
                </p>
                <p>
                    <span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3、【
                    </span>
                    <span>
                        &nbsp;中石化只有卡密】提交时，卡密会直接去充值，如遇订单问题，请于24小时内提供正确卡号核实。
                    </span>
                </p>
                <p>
                    <span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;如实际面值大于提交面值，则按照提交面值结算；
                    </span>
                </p>
                <p>
                    <span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;如实际面值小于提交面值，则卡密会被使用且无法结算。
                    </span>
                </p>
                <p>
                    <span style="font-size: 14px; color: rgb(192, 0, 0);">
                        注意：提交面值请按照<strong>单张卡密</strong>金额选择，不是提交卡密的总和。
                    </span>
                </p>
                <p>
                    <span style="font-size: 14px; color: rgb(192, 0, 0);">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 中石化只有卡密，提交之后如存在争议，请24小时内提供卡号核实，如超过不能提供，造成损失，需自行承担。
                    </span>
                </p>
                <p>
                    <span style="font-size: 14px; color: rgb(192, 0, 0);">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </span>
                </p>
                <p>
                    <span style="font-size: 14px; color: rgb(192, 0, 0);"><br></span>
                </p>
            </div>
        </div>
        <van-dialog v-model="dialogShow" :showConfirmButton="false" width="360px">
            <div>
                <div class="dialog-title">
                     中石化加油卡
                     <van-icon name="cross" class="close-icon" @click="closeDialog"/>
                </div>
                <div class="dialog-con">
                    <p class="div-flex">
                        <span>面值: 100元&nbsp;&nbsp;&nbsp;&nbsp;转让折扣: <b>98.30</b></span>
                        <van-button icon="plus" type="info" round size="small" @click="Add"/>
                    </p>

                    <div v-for="(item,index) in TaskArray" :key="index" class="div-flex" style="margin-bottom:15px;">
                        <van-cell-group>                            
                            <van-field v-model="item.cardNum" label="卡号" placeholder="请输入卡号"  size="small" clearable/>
                            <van-field v-model="item.cardPassword" label="密码" placeholder="请输入卡密"  size="small" clearable/>                                                        
                        </van-cell-group>        
                        <van-button icon="minus" type="info" round size="small" @click="Delete(item)"/>
                    </div>
                    <!-- <van-field
                        v-model="message"
                        rows="4"
                        autosize
                        type="textarea"
                        class="dialog-msg"
                        placeholder="卡号卡密之间自动用空格隔开，输完一张自动换行  卡号长度：16位，卡密长度：20位； 如下 1476806952423111  15003685906991321739  4437653637380256  84512144870622596882"
                    /> -->
                    <p style="font-size:14px" class="div-flex">
                        <span>您已输入 <span style="font-size: 18px;color: red;">{{TaskArray.length>0?TaskArray.length:0}}</span> 张</span>
                    </p>
                    <van-checkbox v-model="checked1" class="dialog-check">我已阅读并接受<a href="javascript:" @click="getAgreement">《蜜蜂收卡闲置资源转让协议》</a></van-checkbox>
                    <van-checkbox v-model="checked2" class="dialog-check">我已阅读并接受<a href="javascript:" @click="getRules">《蜜蜂收卡卡密转让规则》</a></van-checkbox>
                    <van-cell>
                        <van-button block type="info" native-type="submit" @click="submit">确认提交</van-button>
                    </van-cell>
                </div>
               
            </div>
        </van-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return{
            dialogShow:false,
            message:'',
            checked1:false,
            checked2:false,
            cardNum:'',
            cardPassword:'',
            TaskArray:[{id:'',cardNum:'',cardPassword:''}]
        }
    },
    methods:{
        showPriceDialog() {
            this.dialogShow = true
        },
        getAgreement(){
            this.$router.push({path:'/Agreement'})
        },
        getRules() {
            this.$router.push({path:'/Rules'})
        },
        closeDialog() {
            this.dialogShow = false
        },
        submit() {
            this.dialogShow = false
        },
        // 新增
        Add(){
            let obj= {id:'',cardNum:'',cardPassword:''};
            let addObj = JSON.parse(JSON.stringify(obj));
            this.TaskArray.push(addObj);
        },
        // 删除
        Delete(item) {
            this.TaskArray.splice(this.TaskArray.indexOf(item), 1);
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    padding:10px;
}

.task-item{
    border-radius:10px;
    background:#fff;
    .task-title{
        padding: 0 10px 0 6px;
        border-radius: 10px 10px 0 0;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e4e4e4;
        font-size: 18px;
    }
    .div-flex{
        display: flex;
        justify-content: space-between;
    }
    .task-order{
        display:inline-block;
        font-size:14px;
        font-weight: 600;
        padding:10px 6px;
    }
    .task-money{
        float:right;
        // display:inline-block;
        border-radius: 16px;
        font-size: 12px;
        padding:3px 15px;
        margin-top:10px;
        margin-right: 10px;
        color: orange;
        border: 1px solid orange;
    }
}
.price-list{
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .price-item{
        border: 1px solid #00B7FF;
        text-align: center;
        padding: 7px 0;
        border-radius: 3px;
        // flex:1;
        margin:0px 6px 10px;
        width:calc(33.3% - 12px);
        box-sizing: border-box;
    }
    .price{
        font-size:16px;
    }
    .discount{
        color: #00B7FF;
        padding-top: 10px;
        font-size:12px;
    }
}
.recyle-circle{
    display:inline-block;
    width:18px;
    height:18px; 
    line-height: 18px;
    border:2px solid #00B7FF;
    color:#00B7FF;
    border-radius: 100%;
    margin-right:5px;
    text-align: center;
}
.page_tip{
    p{
       white-space: normal; 
       padding:3px 0;
    }
    span{
        font-size:14px;
        color:#8f8f94;
    }
    .col-red{
        color:red;
    }
    strong{
        span{
            font-weight: 600;
        }
    }
}
.dialog-title{
    padding:15px 0;
    text-align: center;
    border-bottom: 1px solid #ddd;
    position: relative;
    .close-icon{
        position:absolute;
        right:10px;
    }
}
.dialog-con{
    padding:5px 6px 15px;
    max-height: 60vh;
    overflow-y: auto;
    .van-cell{
        padding:5px 16px;
    }
    p{
        padding:10px 0;
        
    }
    .div-flex{
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
    .dialog-msg{
        border:1px solid #ddd;
        border-radius: 8px;
    }
    .dialog-check{
        font-size:14px;
        padding:5px 0;
        a{
            color:#007aff;
        }
    }
}
</style>