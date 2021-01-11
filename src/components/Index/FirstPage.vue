<template>
    <div class="container">
        <div class="notice">
            <div>
                <span class="notice-tips">最新公告</span>
            </div> 
            <van-notice-bar color="#666" background="#fff" :scrollable="false" class="notice-bar">                
                <van-swipe
                    vertical
                    class="notice-swipe"
                    :autoplay="3000"
                    :show-indicators="false"
                >
                    <van-swipe-item>1.内容 1</van-swipe-item>
                    <van-swipe-item>2.内容 2</van-swipe-item>
                    <van-swipe-item>3.内容 3</van-swipe-item>
                </van-swipe>
            </van-notice-bar>
           
        </div>
        
        <div class="grid-detail">
            <p>为你推荐</p>
            <van-grid :column-num="3" :gutter="12" clickable>
                <van-grid-item class="grid-item grid-shadow" to="/CardType">
                    <img src="../../assets/img/charge.png">
                    <p>
                        话费直充
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item grid-shadow" to="/CardType">
                    <img src="../../assets/img/oil1.png">
                    <p>
                        平安油卡话费
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item grid-shadow" to="/CardType">
                    <img src="../../assets/img/card1.png">
                    <p>
                        卡密转让
                    </p>
                </van-grid-item>
            </van-grid>
            <p>话费充值</p>
            <van-grid :column-num="3" clickable>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/charge.png">
                    <p>
                        话费直充
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/card1.png">
                    <p>
                        年卡话费
                    </p>
                </van-grid-item>
            </van-grid>
            <p>油卡充值</p>
            <van-grid :column-num="3" clickable>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/oil.png">
                    <p>
                        平安88折加油
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/sand_icon.jpg">
                    <p>
                        杉德充油卡
                    </p>
                </van-grid-item>
            </van-grid>
        </div>
        <div class="grid-detail" style="margin:10px 0">
            <p>话费/石化/商超/代金券/游戏</p>
            <van-grid :column-num="3" clickable>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/card_7.png">
                    <p>
                        话费石化卡密
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/card_4.png">
                    <p>
                        电商/商超卡
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/card_3.png">
                    <p>
                        游戏视频会员
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/card_8.png">
                    <p>
                        美食电影代金券
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/oil.png">
                    <p>
                        石化油卡
                    </p>
                </van-grid-item>
            </van-grid>
        </div>
        <div class="grid-detail" style="margin-bottom:15px;">
            <p>积分来换钱</p>
            <van-grid :column-num="3" clickable>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/point_3.png">
                    <p>
                        移动/联通/电信积分
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/point_1.png">
                    <p>
                        各类银行积分
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/point_2.png">
                    <p>
                       航空里程
                    </p>
                </van-grid-item>
                <van-grid-item class="grid-item" to="/CardType">
                    <img src="../../assets/img/point_4.png">
                    <p>
                        其他积分
                    </p>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>
<script>
export default {
    methods:{

    }
}
</script>
<style lang="less" scoped>
.notice{
    background:#fff;
    display: flex;
    padding:0 10px;
    align-items: center;
    border-bottom:1px solid #ebedf0;
    .notice-tips{
        font-size:14px;
        border:1px solid red;
        color:red;
        padding:3px;
        display: block;
        width:64px;
    }
    .notice-bar{
        width:70%;
    }
}
 .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .grid-detail{
      background:#fff;
      p{
          padding:10px 6px;
      }
  }
  .grid-item{
      img{
          width:34px;
          margin-bottom:10px;
      }
      p{
          font-size:14px;
      }
  }
  .grid-shadow{
    // box-shadow: 2px 2px 10px #E6E6E6;
  }
</style>