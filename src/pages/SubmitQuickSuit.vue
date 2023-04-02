<template>
  <div class="slider">
    <div class="slider__slide slider__slide--active" data-slide="1">
      <div class="slider__wrap">
        <div class="slider__back"></div>
      </div>
      <div class="slider__inner" style="padding-top: 50px">
        <h1 style="color:white;text-align: center;font-family: 'Roboto', sans-serif;">您想要发起的是什么类型的诉讼？</h1>
        <button class="button" @click="GotoNext1('婚姻/离婚/继承')">婚姻/离婚/继承</button>
        <button class="button" @click="GotoNext1('交通/保险理赔')">交通/保险理赔</button>
        <button class="button" @click="GotoNext1('劳动/工伤赔偿')">劳动/工伤赔偿</button>
        <button class="button" @click="GotoNext1('债务/抵押/借贷')">债务/抵押/借贷</button>
        <button class="button" @click="GotoNext1('刑事诉讼')">刑事诉讼</button>
        <button class="button" @click="GotoNext1('合同审查/维权')">合同审查/维权</button>
        <button class="button" @click="GotoNext1('房地产')">房地产</button>
        <button class="button" @click="GotoNext1('医疗')">医疗</button>
        <button class="button" @click="GotoNext1('公司')">公司</button>
        <button class="button" @click="GotoNext1('拆迁安置')">拆迁安置</button>
        <button class="button" @click="GotoNext1('知识产权')">知识产权</button>
        <button class="button" @click="GotoNext1('经济金融')">经济金融</button>
        <button class="button" @click="GotoNext1('涉外纠纷')">涉外纠纷</button>
        <button class="button" @click="GotoNext1('教育')">教育</button>
        <button class="button" @click="GotoNext1('新闻舆论')">新闻舆论</button>


        <div class="slider__content">
        </div>

      </div>

    </div>






    <div class="slider__slide" data-slide="2">
      <div class="slider__wrap">
        <div class="slider__back"></div>
      </div>
      <div class="slider__inner" style="padding-top: 50px">
        <h1 style="color:white;text-align: center;font-family: 'Roboto', sans-serif;">您发起诉讼涉及的金额大约是多少？</h1>
        <button class="button" @click="GotoNext2(500)">500元以下</button>
        <button class="button" @click="GotoNext2(2000)">500-2000元</button>
        <button class="button" @click="GotoNext2(5000)">2000元-5000元</button>
        <button class="button" @click="GotoNext2(10000)">5000元-1万元</button>
        <button class="button" @click="GotoNext2(100000)">1万元-10万元</button>
        <button class="button" @click="GotoNext2(200000)">10万元-20万元</button>
        <button class="button" @click="GotoNext2(500000)">20万元-50万元</button>
        <button class="button" @click="GotoNext2(5000000)">50万元-500万元</button>
        <button class="button" @click="GotoNext2(50000000)">500万元-5000万元</button>
        <button class="button" @click="GotoNext2(100000000)">5000万元以上</button>


      </div>
      <div class="slider__content">

      </div>

    </div>







    <div class="slider__slide" data-slide="3">
      <div class="slider__wrap">
        <div class="slider__back"></div>
      </div>
      <div class="slider__inner" style="padding-top: 50px">
        <h1 style="color:white;text-align: center;font-family: 'Roboto', sans-serif;">{{ words }}</h1>

        <el-row style="margin-left: 100px;" v-if="easy === true">
          <el-col
              :span="6"
              :offset="0"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img
                  src="https://static001.geekbang.org/resource/image/3b/bd/3b0b12b45d0a8c6375b2bef33e81d5bd.jpg?x-oss-process=image/resize,w_137,h_180/format,webp"
                  class="image"
              />
              <div style="padding: 14px">
                <span class="lawyername">{{lawyers[0].userAccount}}</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <el-button text class="button" @click="toAnalysis(lawyers[0])">选择</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col
              :span="6"
              :offset="2"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img
                  src="https://static001.geekbang.org/resource/image/b0/19/b0878e88a8055d0a8479ab8c934f0519.jpg?x-oss-process=image/resize,w_137,h_180/format,webp"
                  class="image"
              />
              <div style="padding: 14px">
                <span class="lawyername">{{lawyers[1].userAccount}}</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <el-button text class="button" @click="toAnalysis(lawyers[1])">选择</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col
              :span="6"
              :offset="2"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img
                  src="https://static001.geekbang.org/resource/image/19/6d/191bb0119563173895c6e526bb2f906d.jpg?x-oss-process=image/resize,w_137,h_180/format,webp"
                  class="image"
              />
              <div style="padding: 14px">
                <span class="lawyername">{{ lawyers[2].userAccount }}</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <el-button text class="button" @click="toAnalysis(lawyers[2])">选择</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <button v-if="easy === false">回到主页</button>

      </div>
      <div class="slider__content">

      </div>
    </div>



    <div class="slider__indicators"></div>
  </div>
</template>

<script setup>
// const setActiveItem2 = async (index) =>{
//   if(index !== 4){
//     this.$refs.carousel.setActiveItem(index+1)
//   }
//   else{
//     this.carouselShow = 0
//   }
// }
import $ from 'jquery'
import {useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios";

const router = useRouter();

$(document).ready(function(){
  for (var i=1; i <= $('.slider__slide').length; i++){
    $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
  }
  setTimeout(function(){
    $('.slider__wrap').addClass('slider__wrap--hacked');
  }, 100);
})

function goToSlide(number){
  $('.slider__slide').removeClass('slider__slide--active');
  $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}

const GotoNext = async () => {
  console.log("已经运行")
  var currentSlide = Number($('.slider__slide--active').data('slide'));
  var totalSlides = $('.slider__slide').length;
  currentSlide++
  if (currentSlide > totalSlides){
    currentSlide = 1;
  }
  goToSlide(currentSlide);
}

let words = ref('');
let easy = ref(false);
const price = ref(0);

const area = ref('');
const GotoNext1 = async (choice1) => {
  area.value = choice1;
  console.log("已经运行")
  var currentSlide = Number($('.slider__slide--active').data('slide'));
  var totalSlides = $('.slider__slide').length;
  currentSlide++
  if (currentSlide > totalSlides){
    currentSlide = 1;
  }
  goToSlide(currentSlide);
}

const lawyers = ref([]);

const GotoNext2 = async (choice2) => {
  price.value = choice2;
  console.log("已经运行")
  const res = (await myAxios.post('/findUsersByElement',{
    element:'lawyerArea',
    value:area.value,
  }))

  lawyers.value = res.data;

  window.sessionStorage.setItem('area',area.value);

  if(['婚姻/离婚/继承','交通/保险理赔','劳动/工伤赔偿','债务/抵押/借贷','合同审查/维权','知识产权','教育','新闻舆论'].includes(area.value))
  {
    easy.value = true;
    words.value = '您起诉的案件属于：易诉案件\n即刻选择律师，开始易诉之旅吧！'
  }

  else if(['刑事诉讼','房地产','医疗','公司','拆迁安置','经济金融','涉外纠纷'].includes(area.value) && price.value < 100000){
    easy.value = true;
    words.value = '您起诉的案件属于：易诉案件\n即刻选择律师，开始易诉之旅吧！'
  }

  else{
    easy.value = false;
    words.value = '您起诉的案件属于：复杂案件\n点击跳转至首页选择律师'
  }

  console.log("area.value="+area.value)
  console.log("price.value="+price.value)
  console.log("easy="+easy.value)



  var currentSlide = Number($('.slider__slide--active').data('slide'));
  var totalSlides = $('.slider__slide').length;
  currentSlide++
  if (currentSlide > totalSlides){
    currentSlide = 1;
  }

  goToSlide(currentSlide);
}






const toAnalysis = async (lawyer) =>{
  router.push({
    path: '/SuitAnalysis',
    query: lawyer
  });
}






</script>


<style lang="scss" scoped>
$main: #777;
$back: #aaa;
$accent: hsl(220,50%,40%);

$sans: 'Open Sans', sans-serif;
$heebo: 'Heebo', sans-serif;

$base: 3vh;

$time: 1800ms;

$ease-out: cubic-bezier(0.260, 0.005, 0.135, 1.000);
$ease-in-out: cubic-bezier(0.785, 0.135, 0.150, 0.860);

body{
  background: $back;
  font-family: $sans
}

.lawyername{
  margin: 110px;
}

.image{
  height: 70%;
  width: 70%;
  margin-left:40px;
  margin-top: 10px;
  box-shadow: 5px 5px 5px
}

.slider{
  position: relative;
  height: 100vh;
  width: 100vw;
  background: $main;
  overflow: hidden;;

  &__wrap{
    position: absolute;
    width: 100vw;
    height: 100vh;
    transform: translateX(100vw);
    top: 0%;
    left: 0;
    right: auto;
    overflow: hidden;
    transition: transform $time/4 $ease-in-out;
    transform-origin: 0% 50%;
    transition-delay: $time/4;
    opacity: 0;
    &--hacked{
      opacity: 1;
    }
  }

  &__back{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size:  auto 100%;
    background-position: center;
    transition: filter $time/4 $ease-in-out;
  }

  &__inner{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0%;
    background-size: auto 133.3333%;
    background-position: center;
    transform: scale(0.75);
    transition: transform $time/4 $ease-in-out, box-shadow $time/4 $ease-in-out, opacity $time/4 step-end;
    opacity: 0;
    box-shadow: 0 $base $base rgba(darken($accent,50%),0);
    padding: $base*5;
    box-sizing: border-box;
  }

  &__content{
    position: relative;
    top: 50%;
    width: auto;
    transform: translateY(-50%);
    color: white;
    font-family: $heebo;
    opacity: 0;
    transition: opacity $time/4;
    h1{
      font-weight: 900;
      font-size: $base*3;
      line-height: 0.85;
      margin-bottom: $base/4;
      pointer-events: none;
      text-shadow: 0 $base/8 $base/4 rgba(darken($accent,50%),0.1);
    }
    a{
      cursor: pointer;
      font-size: $base*0.8;
      letter-spacing: $base*0.1;
      font-weight: 100;
      position: relative;
      &:after{
        content: '';
        display: block;
        width: $base*3;
        background: white;
        height: 1px;
        position: absolute;
        top: 50%;
        left: $base*2;
        transform: translateY(-50%);
        transform-origin: 0% 50%;
        transition: transform $time/2 $ease-in-out;
      }
      &:before{
        content: '';
        border-top: 1px solid white;
        border-right: 1px solid white;
        display: block;
        width: $base/3;
        height: $base/3;
        transform: translateX(0) translateY(-50%) rotate(45deg);
        position: absolute;
        font-family: $heebo;
        font-weight: 100;
        top: 50%;
        left: $base*5;
        transition: transform $time/2 $ease-in-out;
      }
      &:hover{
        &:after{
          transform: scaleX(1.5);
          transition: transform $time*2/3 $ease-in-out;
        }
        &:before{
          transform: translateX(#{$base*2}) translateY(-50%) rotate(45deg);
          transition: transform $time*2/3 $ease-in-out;
        }
      }
    }
  }

  &__slide{
    position: absolute;
    left: 0;
    height: 100vh;
    width: 100vw;
    //transform: translatex(-100%);
    transition: transform $time/3 $ease-in-out;
    transition-delay: $time/3;
    pointer-events: none;
    z-index: 0;

    &--active{
      transform: translatex(0%);
      z-index: 2;
      .slider__wrap{
        transform: translateX(0);
        transform-origin: 100% 50%;
        opacity: 1;
        animation: none;
      }
      .slider__back{
        filter: blur(#{$base*0.5});
        transition: filter $time/2 $ease-in-out;
        transition-delay: $time/2 !important;
      }
      .slider__inner{
        transform: scale(0.80);
        box-shadow: 0 $base/3 $base*2 rgba(darken($accent,50%),0.2);
        pointer-events: auto;
        opacity: 1;
        transition: transform $time/2 $ease-in-out, box-shadow $time/2 $ease-in-out, opacity 1ms step-end;
        transition-delay: $time/2;
      }
      .slider__content{
        opacity: 1;
        transition-delay: $time*3/4;
      }
    }

    &:not(.slider__slide--active) .slider__wrap{
      @keyframes hack{
        0%{
          transform: translateX(0);
          opacity: 1;
        }
        50%{
          transform: translateX(-100vw);
          opacity: 1;
        }
        51%{
          transform: translateX(-100vw);
          opacity: 0;
        }
        52%{
          transform: translateX(100vw);
          opacity: 0;
        }
        100%{
          transform: translateX(100vw);
          opacity: 1;
        }
      }
      animation-name: hack;
      animation-duration: $time/2;
      animation-delay: $time/4;
      animation-timing-function: $ease-in-out;
    }

    &:nth-child(1) .slider__back, &:nth-child(1) .slider__inner{
      background-image: url("../../public/5_内背景_1920.jpg");
      //background: #eee;
    }
    &:nth-child(2) .slider__back, &:nth-child(2) .slider__inner{
      background-color: coral;
      //background: #aaa;
    }
    &:nth-child(3) .slider__back, &:nth-child(3) .slider__inner{
      background-color: crimson;
      //background: #888;
    }
  }


}


.sig{
  position: fixed;
  bottom: 8px;
  right: 8px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 100;
  font-family: sans-serif;
  color: rgba(255,255,255,0.4);
  letter-spacing: 2px;
  z-index: 9999;
}
</style>

<style scoped>
html, body {
  height: 100%;
}

.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  margin: 60px;
  width: 140px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

</style>