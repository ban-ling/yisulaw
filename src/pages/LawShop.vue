<template>
  <div class="headline">
    <div class="headline_1"></div>
    <div  class="headline_2">
      <div class="first_icon">
        <p>热门内容</p>
      </div>
      <div class="second_icon">
        <a href="#" class="a1">商城首页</a>
      </div>
      <div class="second_icon">
        <a href="#" class="a1" @click="handleclick()">合同代写</a>
      </div>
      <div class="second_icon">
        <a href="#" class="a1" @click="handleclick()">文书代写</a>
      </div>
      <div class="second_icon">
        <a href="#" class="a1" @click="handleclick()">维权宝典</a>
      </div>

    </div>

  </div>
  <!--  大屏幕-->
  <el-dialog v-model="dialogVisible" title="付款">
    <div class="container">
      <div class="tab"></div>
      <div class="paid"><p>支付成功！</p></div>
      <div class="receipt">
        <div class="paper">
          <div class="title">支付</div>
          <div class="date">Date: {{nowtime}}</div>
          <table>
            <tbody>
            <tr><td>法律保险服务1年</td><td class="right">10000元</td></tr>
            <tr><td colspan="2" class="center"><input type="button" value="现在支付      " @click="pay()"/></td></tr>
            </tbody>
          </table>
          <div class="sign center">
            <div class="barcode"></div>
            <br/>
            0123456789
            <br/>
            <div class="thankyou">
              Thank you for your business
            </div>
          </div>
        </div>

      </div>
    </div>
  </el-dialog>




  <div class="big_icon">
    <div class="big_icon_content">
      <div class="left_list">
        <div class="left_list_information">
          <p class="p1"> | 咨询服务</p>
          <a href="#"><p class="p2" @click="handleclick()">见面咨询 私人律师 7天无限制咨询</p></a>

        </div>
        <div class="left_list_information">
          <p class="p1"> | 合同代写</p>
          <a href="#"><p class="p2" @click="handleclick()">婚姻家庭 买卖经销 劳动用工 合同审核</p></a>

        </div>
        <div class="left_list_information">
          <p class="p1"> | 文书代写</p>
          <a href="#"><p class="p2" @click="handleclick()">非诉讼文书 律师函代写 民事诉讼</p></a>

        </div>
        <div class="left_list_information">
          <p class="p1"> | 维权攻略</p>
          <a href="#"><p class="p2" @click="handleclick()">婚姻家庭 交通事故 劳动用工 买房租房</p></a>

        </div>

      </div>
      <div class="roll_ban">
        <!--        -->
        <div class="SwiperBox" ref="SwiperBox" @mouseenter="MouseFun('移入')" @mouseleave="MouseFun('移出')">
          <!-- 图片 -->
          <div class="imgBox" :style="{left:`-${leftVal}px`,transition:`${ition}s`}">
            <img :src="item.imgUrl" v-for="(item,index) in imgList" :key="index" @click="handleclick()"/>
            <!-- 复制第一张放到最后,以实现无缝无线循环滚动效果 -->
            <img :src="imgList[0].imgUrl" alt="" @click="handleclick()">
          </div>
          <!-- 左箭头按钮 -->
          <div class="leftBtn" @click="throttle(PrevFun)">&larr;</div>
          <!-- 右箭头按钮 -->
          <div class="rightBtn" @click="throttle(NextFun)">&rarr;</div>
          <!-- 下方指示点容器 -->
          <div class="instBox">
            <div @click="instFun(index)" v-for="(item,index) in imgList.length" :key="index"
                 :class="['inst',index==imgShow?'instActv':'']">
            </div>
          </div>
        </div>

        <!--        -->

      </div>
      <div class="right_list">
        <div class="div1">
          <img class="img1" src="../Images/shop/限时活动.png" alt="" @click="handleclick()">
        </div>
        <div class="div1">
          <img class="img1" src="../Images/shop/bg.png" alt="">
        </div>
      </div>
    </div>
    <!--  信息条-->
    <div class="information_thing">
      <div class="picture_introduction">
        <img  src="../Images/shop/ban1.png" alt="" width="250" height="90">
      </div>
      <div class="picture_introduction">
        <img  src="../Images/shop/ban2.png" alt="" width="250" height="90">
      </div>
      <div class="picture_introduction">
        <img  src="../Images/shop/ban3.png" alt="" width="250" height="90">
      </div>
      <div class="picture_introduction">
        <img  src="../Images/shop/ban4.png" alt="" width="250" height="90">
      </div>

    </div>
    <!--    精选服务-->
    <div class="title_first">
      <h2>精选服务</h2>
    </div>
    <!--    服务内容-->
    <div class="shop_thing">
      <div class="small_thing">
        <div class="small_thing_left">
          <img  src="../Images/shop/律所咨询.png" alt="" width="140" height="140">
        </div>
        <div class="small_thing_right">
          <div class="small_thing_right_top">
            <a href="#"><p class="p3">面见律师咨询服务  </p></a>
            <el-button type="primary" @click="handleclick()" round>开始服务</el-button>

          </div>
          <div class="small_thing_right_bottom">
            <p class="p4">
              服务介绍：害怕电话说不清楚，面见律师一次性说透方案！专业律师一对一沟通，针对性答疑，帮您快速高效解决问题！专业客服全程
            </p>
            <p class="p5">
              限时价格：
            </p>
            <p>￥299.00/件</p>

          </div>

        </div>
      </div>
      <div class="small_thing">
        <div class="small_thing_left">
          <img  src="../Images/shop/律所咨询.png" alt="" width="140" height="140">
        </div>
        <div class="small_thing_right">
          <div class="small_thing_right_top">
            <a href="#"><p class="p3">私人律师咨询服务  </p></a>
            <el-button type="primary" @click="handleclick()" round>开始服务</el-button>

          </div>
          <div class="small_thing_right_bottom">
            <p class="p4">
              服务介绍：离婚/借贷/索赔需频繁咨询，私人律师解答省时又彻底！律师一对一沟通，帮您深度分析案件，指导起诉立案！
            </p>
            <p class="p5">
              限时价格：
            </p>
            <p>￥199.00/件</p>

          </div>

        </div>
      </div>
      <div class="small_thing">
        <div class="small_thing_left">
          <img  src="../Images/shop/代写.jpg" alt="" width="140" height="140">
        </div>
        <div class="small_thing_right">
          <div class="small_thing_right_top">
            <a href="#"><p class="p3">律师函代写服务  </p></a>
            <el-button type="primary" @click="handleclick()" round>开始服务</el-button>

          </div>
          <div class="small_thing_right_bottom">
            <p class="p4">
              旗下资深律师为您提供律师函代写服务，五分钟响应，一分钟对接。不用担心怎么写，一对一无限制沟通
            </p>
            <p class="p5">
              限时价格：
            </p>
            <p>￥699.00/件</p>

          </div>

        </div>
      </div>
      <div class="small_thing">
        <div class="small_thing_left">
          <img  src="../Images/shop/代写.jpg" alt="" width="140" height="140">
        </div>
        <div class="small_thing_right">
          <div class="small_thing_right_top">
            <a href="#"><p class="p3">民事起诉状代写服务  </p></a>
            <el-button type="primary" @click="handleclick()" round>开始服务</el-button>

          </div>
          <div class="small_thing_right_bottom">
            <p class="p4">
              服务介绍：身陷离婚、追债、交通纠纷？资深律师来支招！律师一对一量身定制民事起诉状，帮您快速高效解决纠纷！3个工作日内不限次数
            </p>
            <p class="p5">
              限时价格：
            </p>
            <p>￥299.00/件</p>

          </div>

        </div>
      </div>

    </div>
  </div>
  <div class="second_part">

    <div class="second_title">
      <h1 class="h1_1">更多服务</h1>
      <p class="p_2">法律计算器与在线服务</p>

    </div>
    <div class="banning">
      <div class="co">
        <a href="#">
          <img src="../Images/shop/foot1.png" alt="" height="100px" width="150px">
        </a>
      </div>
      <div class="co">
        <a href="#">
          <img src="../Images/shop/foot2.png" alt="" height="100px" width="150px">
        </a>
      </div>
      <div class="co">
        <a href="#">
          <img src="../Images/shop/foot3.png" alt="" height="100px" width="150px">
        </a>
      </div>
      <div class="co">
        <a href="#">
          <img src="../Images/shop/foot4.png" alt="" height="100px" width="150px">
        </a>
      </div>
      <div class="co">
        <a href="#">
          <img src="../Images/shop/foot5.png" alt="" height="100px" width="150px">
        </a>
      </div>
      <div class="co">
        <a href="#">
          <img src="../Images/shop/foot6.png" alt="" height="100px" width="150px">
        </a>
      </div>
    </div>
    <!--      底部-->
    <div class="rooter"></div>
  </div>


</template>

<script>
import l1 from '../Images/shop/1.jpg'
import l2 from '../Images/shop/2.jpg'
import l3 from '../Images/shop/3.png'
import Payment from "../components/Payment.vue";
import $ from "jquery";
export default {
  components: {Payment},
  data() {
    return {
      imgList: [
        {imgUrl: l1},

        {imgUrl: l2},
        {imgUrl: l3},
      ],
      leftVal:0,  // 轮播图盒子的偏移值
      flag:true, // 用来节流防止重复点击
      start:null, // 自动执行下一张定的时器
      imgWidth:500,  // 在这里填写你需要的图片宽度
      ition:0.8, // 设置轮播图过度时间
      imgShow:0, // 表示当前显示的图片索引
      dialogVisible:false,
      nowtime:''
    };
  },
  mounted() {
    this.imgWidth = this.$refs.SwiperBox.offsetWidth // 自动获取轮播图盒子宽度
    this.奥力给() // 偷偷告诉大家一个小秘密,JavaScript是原生支持中文命名函数或变量的哦


  },
  methods: {
    pay(){
      $(".receipt").slideUp("slow");
      $(".paid").slideDown("slow");
      dialogVisible.value = false;
    },

    handleclick(){
      let current = new Date();
      let nowday = current.getDay();
      let nowmonth = current.getMonth();
      let nowyear = current.getFullYear();
      this.nowtime = nowyear + '/' + nowmonth + '/' + nowday
      $(".receipt").slideDown();
      $(".paid").slideUp();
      this.dialogVisible = true
    },

    // 这里定义一个鼠标移入移出事件，鼠标悬停时停止自动轮播，鼠标移出则重新执行自动轮播
    MouseFun(type){// 停止定时器            // 重新执行定时器
      type=='移入'?clearTimeout(this.start):this.奥力给()
    },
    // 此为自动轮播定时器
    奥力给(){
      this.start = setInterval(()=>{
        this.NextFun()
      },3000)
    },
    // 这里通过额外封装的节流函数触发 PrevFun() 和 NextFun(),以达到防止重复点击的效果
    throttle(fun) {
      if (this.flag) {
        this.flag = false;
        fun(); // 此为模板中传递进来的PrevFun()或NextFun()函数
        setTimeout(() => {
          this.flag = true;
        }, 1200); // 节流间隔时间
      }
    },
    // 上一张
    PrevFun(){
      if(this.leftVal==0){ // 判断显示的图片 是 第一张时执行
        // this.imgList.length是指循环图片数组的图片个数
        this.ition=0 // 将过渡时间变成0，瞬间位移到最后一张图
        this.imgShow=this.imgList.length-1 // 将高亮小点改为最后一张图
        this.leftVal=(this.imgList.length)*this.imgWidth // 瞬间移动
        setTimeout(()=>{  // 通过延时障眼法,归原过渡时间,执行真正的“上一张”函数
          this.ition=0.8
          this.leftVal -= this.imgWidth
        },this.ition*1000)
      }else{ // 判断显示的图片 不是 第一张时执行
        this.ition=0.8
        this.leftVal -= this.imgWidth
        this.imgShow--
      }
    },
    // 下一张
    NextFun(){
      if(this.leftVal==(this.imgList.length-1)*this.imgWidth){ // 判断显示的图片 是 最后一张时执行
        this.ition=0.8
        this.leftVal+=this.imgWidth
        this.imgShow=0
        setTimeout(()=>{
          this.ition=0
          this.leftVal=0
        },this.ition*1000)
      }else{ // 判断显示的图片 不是 最后一张时执行
        this.ition=0.8
        this.leftVal+=this.imgWidth
        this.imgShow++
      }
    },
    // 点击小圆点
    instFun(index){
      this.ition=0.8
      this.leftVal=index*this.imgWidth
      this.imgShow=index
    },
    //
    //


  }
};

</script>

<style scoped>
div{
  vertical-align:bottom;
}
a{
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: #1a1a1a;

}
a:hover{
  color: #0aa0f7;
}
p{
  font-size: 20px;
}
.a1{
  display: inline-block;
  margin-top: 20px;
  margin-left: 40px;
}
.headline{
  height:100px;
  background:linear-gradient(rgb(255, 255, 255),rgb(229, 238, 251));
}
.headline_1{
  height: 40px;
}
.headline_2{
  width: 1100px;
  margin: 0 auto;
  height: 60px;
}
.first_icon{
  display: inline-block;

  color: #fff;
  width: 200px;
  height: 60px;
  text-align: center;
  background-color: rgb(0, 87, 255);
  border-radius: 12px 12px 0px 0px;
}
.second_icon{
  display: inline-block;
  margin-left: 40px;
  width:150px;
  height: 60px;
}
.big_icon{
  height:1250px;
  background: linear-gradient(rgb(229, 238, 251),rgb(255, 255, 255));
}
.big_icon_content{
  width:1100px;
  height: 450px;
  margin: 0 auto;
}
.left_list{
  display: inline-block;
  width: 200px;
  height: 450px;
  background-color: rgb(255, 255, 255);
}
.left_list_information{
  width: 200px;
  height: 90px;
  border-bottom: 2px solid skyblue;
}
.p1{
  font-size:14px;
  color: rgb(221, 221, 221);
  display: block;
  width: 200px;
  height: 20px;
}
.p2{
  font-size: 15px;
  color: #1a1a1a;
}
.p2:hover{
  color:rgb(0, 87, 255);
}
.roll_ban{
  display: inline-block;
  width: 660px;
  height: 450px;
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
}
.right_list{
  display: inline-block;
  width: 200px;
  height: 450px;

}
.information_thing{
  width: 1100px;
  height: 150px;
  margin:0 auto;
  margin-top: 30px;


}
.img1{
  height: 200px;
  width: 200px;
}
.div1{
  height: 200px;
  width: 200px;
  margin-top: 15px;
}
.picture_introduction{
  display: inline-block;
  width: 250px;
  height: 120px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right:5px;

}
.title_first{
  width: 1100px;
  height: 70px;
  margin: 10px auto;
}


h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
h2 {
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  color: #333;
}
.shop_thing{
  width: 1100px;
  height: 470px;
  margin: 10px auto;
}
.small_thing{
  display: inline-block;
  width:400px;
  height: 200px;
  margin: 10px 50px;
  background-color: white;
}
.small_thing_left{
  display: inline-block;
  width: 140px;
  height: 140px;
  margin-top: 30px;
}
.small_thing_right{
  display: inline-block;
  margin-left: 5px;
  width: 255px;
  height: 140px;
  margin-top: 30px;
}
.small_thing_right_top{
  height: 30px;
  width: 255px;

}
.small_thing_right_bottom{
  height: 100px;
  width: 255px;
}
.p3{
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
}
.p4{
  font-size: 10px;
  color:rgb(153, 166, 196);
}
.p5{
  font-size: 15px;
  color:rgb(153, 166, 196);
}
.second_part{
  height: 580px;
  background-color:rgb(251, 251, 251);
}
.title_second{
  width: 1100px;
  height: 80px;
  margin: 0px auto;
  background-color: #ec5252;
}
.rating{
  width: 1100px;
  height: 600px;
  margin: 0px auto;
  background-color: yellowgreen;

}
.second_title{
  height: 100px;
  width: 1100px;
  margin: 0px auto;

}
.h1_1{
  display: inline-block;
  margin-left: 60px;

}
.p_2{
  display: inline-block;
  margin-left: 20px;
  margin-top: 50px;
  color: rgb(153, 153, 153);
}
.banning{
  width: 1100px;
  height: 150px;
  margin: 0 auto;
}
.co{
  display: inline-block;
  width: 150px;
  height: 100px;
  margin-top: 25px;
  margin-right:20px ;
  background-color: #31abbd;
}
.co:hover{
  transform: translateY(20px);
}
.rooter{
  height: 320px;
  background-image: url("../Images/bg_login.png");
}
.SwiperBox {
  position: relative;
  width: 660px;
  height: 450px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
}
.imgBox{
  position: absolute;
  top: 0px;
  left: 0px;
  min-width: 660px;
  height: 450px;
  display: flex;
  justify-content: flex-start;
}
/* 图片默认样式 */
.imgBox img {
  flex-shrink: 0;
  width: 660px;
  height: 450px;
}
/* 两个按钮共有的样式,也可直接使用箭头图片替代 */
.leftBtn,
.rightBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(109, 109, 109, 0.445);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
}
.leftBtn {
  left: 10px;
}
.rightBtn {
  right: 10px;
}
/* 下方指示器盒子 */
.instBox{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  display: flex;
}
/* 小圆点 */
.inst{
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  margin-right: 8px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.inst:last-child{
  margin-right: 0px;
}
.instActv{
  border: 1px solid #ff0000;
  background: #ff0000;
}




body
{
  margin:0 auto;
  padding:0;
  background-color:#EFE8E2;
  font-family:tahoma;
}
.paid
{
  display:none;
  width:300px;
  margin:0 auto;
  background-color:#fff;
  text-align:center;
  padding-top:25px;
  border-radius:0px 0px 10px 10px;
  padding-bottom:25px;
  color:#00773D;
  line-height:30px;
}
.paid p
{
  background-image:url("http://dc455.4shared.com/download/VILITso0/tsid20130720-183900-9216b81f/check.png");
  background-repeat:no-repeat;
  background-position:left center;
  padding-left:30px;
  width:190px;
  margin:0 auto;
}
.container
{
  width:350px;
  margin:50px auto;
}
.tab
{
  width:350px;
  margin:0 auto;
  height:10px;
  background-color:#2B2929;
  border-radius:50px
}
.receipt
{
  background-color:#FAFAF9;
  padding-top:20px;
  width:300px;
  height:300px;
  margin:-5px auto;
  border-radius:5px 5px 50px 50px;
  -moz-box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  -webkit-box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
.paper
{
  border-top:1px dashed #ccc;
  width:96%;
  margin:0 auto;
}
.title
{
  color:#00773D;
  margin-top:20px;
  margin-left:10px;
  font-weight:bold;
  float:left;
  font-size:16px;
  line-height:30px;
}
.date
{
  color:#00773D;
  margin-top:20px;
  margin-right:10px;
  font-weight:lighter;
  float:right;
  font-size:12px;
  line-height:30px;
}
table
{
  clear:both;
  width:95%;
  margin:0 auto;
  color:#5B5B5B;
  font-size:12px;
  padding-top:10px;
  padding-bottom:20px;
  border-bottom:1px dashed #ccc;
}
.right
{
  text-align:right;
}
.center
{
  text-align:center;
  padding-top:20px;
}
input[type=button]
{
  background-color:#00874C;
  outlie:none;
  border:1px solid #ccc;
  padding:10px;
  border-radius:5px;
  font-weight:bold;
  color:#fff;
  padding-left:30px;
  background-image:url("http://dc707.4shared.com/img/zr6_o80l/s3/13ffd4de138/cart.png");
  background-repeat:no-repeat;
  background-position:5px center;
}
input[type=button]:hover
{
  -moz-box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  -webkit-box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  cursor:pointer;
  color:#f0f0f0;
}
.barcode
{
  height: 10px;
  width: 0;
  box-shadow:1px 0 0 1px #343434, 5px 0 0 1px #343434, 10px 0 0 1px #343434, 11px 0 0 1px #343434, 15px 0 0 1px #343434, 18px 0 0 1px #343434, 22px 0 0 1px #343434, 23px 0 0 1px #343434, 26px 0 0 1px #343434, 30px 0 0 1px #343434, 35px 0 0 1px #343434, 37px 0 0 1px #343434, 41px 0 0 1px #343434, 44px 0 0 1px #343434, 47px 0 0 1px #343434, 51px 0 0 1px #343434, 56px 0 0 1px #343434, 59px 0 0 1px #343434, 64px 0 0 1px #343434, 68px 0 0 1px #343434, 72px 0 0 1px #343434, 74px 0 0 1px #343434, 77px 0 0 1px #343434, 81px 0 0 1px #343434;
  display:inline-block;
  margin-right:85px;
}
.sign
{
  text-align:center;
}
.thankyou
{
  line-height:14px;
  font-size:10px;
  margin-top:5px;
  color:#5B5B5B;
  width:100%;
}



/**/
</style>