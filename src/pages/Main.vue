<template>
  <div class="top_icon">
    <div class="first_list">
      <div class="small_item">
        <a href="#" class="a2">
          <i class="icon_family"></i>
          家庭婚姻
        </a>
      </div>
      <div class="small_item">
        <a href="#" class="a2">
          <i class="icon_company"></i>
          公司法
        </a>
      </div>
      <div class="small_item">
        <a href="#" class="a2">
          <i class="he_tong"></i>
          合同纠纷
        </a>
      </div>
      <div class="small_item">
        <a href="#" class="a2">
          <i class="knowledge"></i>
          知识产权
        </a>
      </div>
      <div class="small_item">
        <a href="#" class="a2">
          <i class="taxation"></i>
          债权债务
        </a>
      </div>


    </div>
    <div class="place">

    </div>
  </div>
  <div class="second_part">
    <div class="second_title">
      <h1 class="h1_1">本地优选律师</h1>
      <p class="p_2">好品质  值得信赖</p>

    </div>
    <div class="advisement_one">
      <div class="advisement_one_1"></div>
      <div class="advisement_one_2"></div>
    </div>
  </div>
  <div class="third_part">
    <div class="third_title">
      <h2 class="h2_1">易诉为您解决各种法律问题</h2>
      <p class="p_3">N+专业律师  超N人次使用</p>
    </div>
    <div class="third_all">
      <div class="left_enter">
        <div class="left_enter_top">
          <p class="p_4">在线问律师
            <a href="#" class="a3">
              示例
            </a>
          </p>
          <div class="text_enter">
            <span class="tips" style="display: block;">请输入案情经过和维权诉求，尽量详实以得到更精准的解答</span>
            <textarea class="txt yahei" id="txtQuestionContent"></textarea>
          </div>
        </div>
        <div class="left_enter_bottom">
          <el-button type="primary" round class="b1">提交</el-button>
        </div>
      </div>
      <div class="small_part">
        <!--        //first line-->
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/找律师.png"/>
        </div>
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/刘飞.png"/>
        </div>
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/电话咨询.png"/>
        </div>
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/法律知识.png"/>
        </div>

        <!--        //second line-->
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/法律聚焦.png"/>
        </div>
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/解决方案.png"/>
        </div>
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/罪名库.png"/>
        </div>
        <div class="small_box" onclick="window.location.href='#';return false">
          <img class="recommend_img" src="../Images/合同范本.png"/>
        </div>

      </div>
    </div>
  </div>
  <div class="forth_part">
    <div class="third_title">
      <h1 class="h1_1">系统推荐</h1>
      <p class="p_2">精准定位  快速解决</p>

    </div>
    <template v-for="lawyer in jiaoYuLawyers">
      <div class="Lawyer_introduction">
        <div class="photo">
          <img class="photo_1" src="../Images/律师照片1.webp">
        </div>
        <div class="introduction">
          <h2 class="h2_2">{{lawyer.userAccount}}</h2>
          <p class="p_5">精准定位  快速解决</p>
        </div>
        <div class="telephone">
          <i class="phone_call"> {{lawyer.telephone}}  </i>
          <el-popover :visible="visible" placement="top" :width="160">
            <p>你确定要联系此律师吗?</p>
            <div style="text-align: right; margin: 0">
              <el-button size="small" text @click="visible = false">取消</el-button>
              <el-button size="small" type="primary" @click="visible = false">是的</el-button
              >
            </div>
            <template #reference>
              <el-button @click="visible = true">联系律师</el-button>
            </template>
          </el-popover>
        </div>
      </div>
    </template>
  </div>
  <div class="forth_part">
    <div class="third_title">
      <h1 class="h1_1">广受好评</h1>
      <p class="p_2">明星律师  优质服务</p>
    </div>
    <div>
      <!--        第一行-->
      <template v-for="lawyer in jiaoYuLawyers">
        <div class="Lawyer_introduction">
        <div class="photo">
          <img class="photo_1" src="../Images/律师照片1.webp">
        </div>
        <div class="introduction">
          <h2 class="h2_2">{{lawyer.userAccount}}</h2>
          <p class="p_5">精准定位  快速解决</p>
        </div>
        <div class="telephone">
          <i class="phone_call"> {{lawyer.telephone}}  </i>
          <el-popover :visible="visible" placement="top" :width="160">
            <p>你确定要联系此律师吗?</p>
            <div style="text-align: right; margin: 0">
              <el-button size="small" text @click="visible = false">取消</el-button>
              <el-button size="small" type="primary" @click="visible = false">是的</el-button
              >
            </div>
            <template #reference>
              <el-button @click="visible = true">联系律师</el-button>
            </template>
          </el-popover>
        </div>
      </div>
      </template>


    </div>
  </div>
  <div class="fifth_part">
    <div class="third_title">
      <h1 class="h1_3">法律 </h1>
      <p class="h1_4">知识 </p>
      <p class="p_6">打造大型法律平台 永做法律知识传播者</p>
    </div>
    <div>
      <div class="vedio_law">
        <div class="SwiperBox" ref="SwiperBox" @mouseenter="MouseFun('移入')" @mouseleave="MouseFun('移出')">
          <!-- 图片 -->
          <div class="imgBox" :style="{left:`-${leftVal}px`,transition:`${ition}s`}">
            <img :src="item.imgUrl" v-for="(item,index) in imgList" :key="index" />
            <!-- 复制第一张放到最后,以实现无缝无线循环滚动效果 -->
            <img :src="imgList[0].imgUrl" alt="">
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





      </div>
      <div class="vedio_law">
        <div class="SwiperBox" ref="SwiperBox" @mouseenter="MouseFun('移入')" @mouseleave="MouseFun('移出')">
          <!-- 图片 -->
          <div class="imgBox" :style="{left:`-${leftVal}px`,transition:`${ition}s`}">
            <img :src="item.imgUrl" v-for="(item,index) in imgList" :key="index" />
            <!-- 复制第一张放到最后,以实现无缝无线循环滚动效果 -->
            <img :src="imgList[0].imgUrl" alt="">
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





      </div>
      <div class="vedio_law">
        <div class="SwiperBox" ref="SwiperBox" @mouseenter="MouseFun('移入')" @mouseleave="MouseFun('移出')">
          <!-- 图片 -->
          <div class="imgBox" :style="{left:`-${leftVal}px`,transition:`${ition}s`}">
            <img :src="item.imgUrl" v-for="(item,index) in imgList" :key="index" />
            <!-- 复制第一张放到最后,以实现无缝无线循环滚动效果 -->
            <img :src="imgList[0].imgUrl" alt="">
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





      </div>
    </div>
    <div class="third_title t2">
      <h1 class="h1_3">普法 </h1>
      <p class="h1_4">视频 </p>
      <p class="p_6">打造大型法律平台 永做法律知识传播者</p>
    </div>
    <div class="t2">
      <div class="vedio_law">
        <video class="video1" controls>
          <source src="../short_video/1.mp4">
        </video>



      </div>
      <div class="vedio_law">
        <video class="video1" controls>
          <source src="../short_video/1.mp4">
        </video>
      </div>
      <div class="vedio_law">
        <video class="video1" controls>
          <source src="../short_video/1.mp4">
        </video>
      </div>
    </div>
  </div>
  <div class="final_part">
    <div class="first_final"></div>
    <div class="second_final"></div>
  </div>
</template>

<script >

import { ref } from 'vue'
import myAxios from "../plugins/myAxios";



export default {
  data() {
    return {
      imgList: [
        {imgUrl: "https://p1.itc.cn/images01/20211203/2419e446083649d08eed75225752fd16.jpeg"},
        {imgUrl: "https://img0.baidu.com/it/u=3361764014,2119623187&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"},
        {imgUrl: "https://img.book118.com/sr1/M00/1B/2F/wKh2Al8s6qKIfWFsAAGVjwpH5XsAAkgEgDO1ewAAZWn917.jpg"},
        {imgUrl: "https://imgcps.jd.com/ling4/100026667910/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6e3/d7b3695b/cr/s/q.jpg"},
        {imgUrl: "https://img30.360buyimg.com/pop/s590x470_jfs/t1/201288/25/23710/64955/62f070fdE95cb4f47/22b916d938a43bb5.jpg"},
      ],
      leftVal:0,  // 轮播图盒子的偏移值
      flag:true, // 用来节流防止重复点击
      start:null, // 自动执行下一张定的时器
      imgWidth:500,  // 在这里填写你需要的图片宽度
      ition:0.8, // 设置轮播图过度时间
      imgShow:0, // 表示当前显示的图片索引
      allLawyers:[],
      jiaoYuLawyers:[],
      GongSiLawyers:[],
      visible:false
    };
  },
  mounted() {
    this.imgWidth = this.$refs.SwiperBox.offsetWidth // 自动获取轮播图盒子宽度
    this.奥力给() // 偷偷告诉大家一个小秘密,JavaScript是原生支持中文命名函数或变量的哦
    this.findJiaoYuLawyers()
  },
  methods: {
    // 查找教育律师
    async findJiaoYuLawyers(){
      const res = await myAxios.post("/findUsersByElement",{
        element:'idenity',
        value:'律师'
      })
      this.jiaoYuLawyers = res.data
      this.jiaoYuLawyers = this.jiaoYuLawyers.filter(lawyer => lawyer.lawyerArea === '教育')
    },
    async findGongSiLawyer(){
      const res = await myAxios.post("/findUsersByElement",{
        element:'idenity',
        value:'律师'
      })
      this.GongSiLawyers = res.data
      this.GongSiLawyers = this.GongSiLawyers.filter(lawyer => lawyer.lawyerArea === '公司')
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

//

//

</script>

<style scoped>
div{
  vertical-align:bottom;
}
.top_icon{
  height:312px;
  background-image: url("../Images/topban_no.png");
  background-repeat: no-repeat;
  background-position: -230px 0px;
  background-size:130%;
  background-attachment: fixed;
}
.first_list{
  width: 225px;
  height: 312px;
  margin-left: 200px;
  display: inline-block;
  background-color:rgba(84, 86, 94,0.6);
}
.small_item:hover{
  transform: scale(1.02);
  background-color: rgba(88,87,90,0.6);
}
.skill_list{
  margin-top: 12px;
}
a{
  text-decoration: none;
  text-align: center;

}
.a2{
  color:rgb(187, 187, 189);
}
.a2:hover{
  color: white;
}
ul,ol,li{
  style:none;
}
.small_item{
  height: 50px;
  width: 225px;
  margin-top: 10px;
}
.icon_family:before{
  content: url("../Images/family_icon.png");
  align-items: center;
}
.icon_company:before{
  content: url("../Images/comapny.png");
  align-items: center;
}
.he_tong:before{
  content: url("../Images/he_tong.png");
  align-items: center;
}
.taxation:before{
  content: url("../Images/taxation.png");
  align-items: center;
}
.knowledge:before{
  content: url("../Images/knowledge.png");
  align-items: center;
}
.place{
  height:225px;
  width:230px;
  background-image: url("../Images/work_stable.png");
  background-size: 97%;
  background-repeat: no-repeat;
  align-items: center;
  margin-left: 600px;
  margin-bottom: 50px;
  display: inline-block;

}
/*                                                 2222222222*/
.second_part{
  height:450px;
  background-color:rgb(255, 255, 255);
}
.second_title{
  height: 100px;
}
.h1_1{
  display: inline-block;
  margin-left: 60px;

}
.p_2{
  display: inline-block;
  margin-left: 20px;
  margin-top: 50px;
  color: #999;
}
.advisement_one{
  height: 320px;
  margin: auto;
}
.advisement_one_1{
  display: inline-block;
  margin-left: 200px;
  width: 500px;
  height: 200px;
  margin-top: 80px;
  background-image: url("../Images/good——choice.png");

}
.advisement_one_2{
  display: inline-block;
  margin-left: 100px;
  width: 500px;
  height: 200px;
  margin-top: 80px;
  background-image: url("../Images/good——choice.png");
}

/*                                333333333333333*/
.third_part{
  height: 500px;
  background-image: url("../Images/bg1920-b.jpg");

}
.h2_1{
  display: block;
  height:60px ;
  color:rgb(185, 187, 190);
  text-align: center;
  font: 30px tahoma, \5FAE\8F6F\96C5\9ED1;
  margin-top: 10px;
}
.p_3{
  display: block;
  height: 40px;
  color:white;
  text-align: center;
}
.third_title{
  height: 120px;

}
.third_all{
  height: 380px;
}
.left_enter{
  width: 430px;
  height: 320px;
  margin-bottom: 25px;
  margin-left: 150px;
  display: inline-block;
  background-color: rgb(255, 255, 255);
}
.p_4{
  display: block;
  height: 40px;
  color:black;
  text-align: center;
  font-size: 22px;
}
.a3{
  display: inline-block;
  margin-left: 20px;
  color: #0aa0f7;
  font-size: 10px;
}
.text_enter{
  width: 430px;
  height: 150px;
}
/**/
textarea:focus{
  border-bottom: 2px solid rgb(16, 114, 233);outline: none;
}
textarea {
  height: 100px;
  -webkit-transition: height linear .3s;
  transition: height linear .3s;
}

.yahei {
  font-family: 'Microsoft YaHei';
}
input, textarea, select {
  outline: none;
  border: none;
  background: none;
}
textarea {
  position: relative;
  z-index: 2;
  display: block;
  width: 98%;
  height: 120px;
  overflow-y: auto;
  border-bottom: 2px solid #eee;
  line-height: 20px;
  resize: none;
}
.tips {
  font-size: 16px;
  color: #999;
}
/**/
.b1{
  display: block;
  align-items: center;
  margin: auto;
}
.small_part{
  width: 800px;
  height: 320px;
  display: inline-block;
  margin-left: 70px;
  margin-top: 35px;
  margin-bottom: 20px;

}
.small_box{
  display: inline-block;
  width: 150px;
  height: 138px;
  margin-top: 10px;
  margin-left: 20px;
  border-bottom:5px solid rgba(100,100,100,0);
  background-color: #6c6e78;
}
.small_box:hover{

  border-bottom: 5px solid cornflowerblue;


}
.recommend_img{
  width: 150px;
  height: 138px;

}
.forth_part{
  height: 500px;
  background-color: rgb(248, 248, 248);
}
.Lawyer_introduction{
  height: 300px;
  width:230px;
  display: inline-block;
  margin-left: 100px;
  margin-top:30px ;
  background-color: white;
  box-shadow: 10px 5px 2px rgb(245, 242, 240);
}
.photo{
  height: 180px;
  width: 160px;
  margin-left: 35px;


}
.photo_1{
  height: 180px;
  width: 160px;

}
.photo_1:hover{
  transform: scale(1.1);
}
.introduction{
  height: 80px;
  width: 230px;

}
.telephone{
  height: 40px;
  width: 230px;

}
.h2_2{
  display: inline-block;
  margin:10px 70px;
  width: 230px;
  height: 20px;
  font-size: 20px;
}
.p_5{
  margin: 10px 40px;
  display: inline-block;
  width: 230px;
  height: 10px;
  color: #999;;
}
.phone_call:before{
  content: url("../Images/telephone.png");
  background-repeat: no-repeat;
}

.fifth_part{
  height: 900px;
  background-color: white;
}
.h1_3{
  display: inline-block;
  margin-left: 50px;
  font-size: 30px;

}
.h1_4{
  display: inline-block;
  margin-left: 10px;
  font-size: 30px;
  height: 50px;
  color: rgb(51, 51, 51);
}
.p_6{
  display: block;
  color:#999;
  margin-left: 60px;
}
.vedio_law{
  height: 250px;
  width:340px;
  display: inline-block;
  margin-left: 100px;
  margin-top: 40px;
}
/*    */


/*    */
.t2{
  background-color:rgb(248, 248, 248) ;
}
/**/
.SwiperBox {
  position: relative;
  width: 340px;
  height: 250px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
}
.imgBox{
  position: absolute;
  top: 0px;
  left: 0px;
  min-width: 340px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
}
/* 图片默认样式 */
.imgBox img {
  flex-shrink: 0;
  width: 340px;
  height: 250px;
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


/**/
.video1{
  height:260px ;
  width: 340px;
}
.final_part{
  height: 500px;
  background-image: url("../Images/bg_login.png");
  background-size: 80%;
}
.first_final{
  height: 350px;
}
.second_final{
  height: 150px;
}

</style>