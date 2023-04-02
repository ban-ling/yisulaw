<template>
  <!-- Start Landing Page -->

  <div class="landing-page">
    <div class="container">
      <div class="header-area">
        <div class="logo">易诉 <b>科技</b></div>
        <ul class="links">
          <li @click="clickto('Main')">主页</li>
          <li @click="clickto('Login')" v-if="islogined === false">注册/登录</li>
          <li @click="clickto('Welcome')" v-if="islogined === true">{{ userAccount }}（已登录）</li>
          <li @click="logout()" v-if="islogined === true">注销</li>
          <li>关于我们</li>
          <li @click="clickto('SubmitQuickSuit')">开始</li>
        </ul>
      </div>
      <div class="info">
        <h1>易诉科技</h1>
        <h2>———让所有人触摸到法律</h2>
        <button @click="clickto('Main')">进入主页</button>
      </div>
<!--      <div class="image">-->
<!--        <img src="https://i.postimg.cc/65QxYYzh/001234.png">-->
<!--      </div>-->
      <div class="image">
        <img src="../../public/交谈.png">
      </div>
      <div class="clearfix"></div>
    </div>
  </div>

  <!-- End Landing Page -->
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const router = useRouter()
const clickto = async (to:string) =>{
  router.push("/"+to)
}

let userAccount = ref("")
let islogined = ref(false);

const logout = async () =>{
  window.sessionStorage.clear();
  userAccount = ref("")
  islogined.value = false;
}


onMounted(async () =>{
  userAccount.value = "";
  islogined.value = false;

  const tmp = window.sessionStorage.getItem("userAccount");
  if(tmp !== null){
    userAccount.value = tmp;
    islogined.value = true;
    console.log("islogined="+islogined.value)
  }
  else{
    islogined.value = false;
  }
  console.log("welcome:userAccount="+userAccount.value)

})


</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
}

.container {
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
}

/* Start Landing Page */

.landing-page {
  position: relative;
  background-color: #FFF;
}

.landing-page .header-area {
  display: flex;
  padding: 25px 0 0;
  position: relative;
}

.landing-page .header-area .logo {
  text-transform: uppercase;
  font-style: italic;
  margin-top: 10px;
  font-size: 19px;
  width: 300px;
  color: #5d5d5d;
}

.landing-page .header-area .links {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: right;
}

.landing-page .header-area .links li {
  display: inline-block;
  margin-left: 30px;
  color: #5d5d5d;
  cursor: pointer;
}

.landing-page .header-area .links li:last-child {
  border: 0;
  border-radius: 20px;
  padding: 10px 18px;
  color: #FFF;
  background-color: #6c63ff;
}

.landing-page .info {
  width: 35%;
  float: left;
  margin-top: 130px;
}

.landing-page .info h1 {
  font-size: 44px;
  margin: 0 0 20px;
  line-height: 1.4;
  color: #5d5d5d;
}

.landing-page .info h2 {
  font-size: 30px;
  margin: 0 0 20px;
  line-height: 1.4;
  color: #5d5d5d;
}

.landing-page .info p {
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  color: #5d5d5d;
}

.landing-page .info button {
  border: 0;
  border-radius: 20px;
  padding: 12px 30px;
  margin-top: 30px;
  cursor: pointer;
  color: #FFF;
  background-color: #6c63ff;
}

.landing-page .image {
  width: 50%;
  float: right;
  margin-top: 35px;
}

.landing-page .image img {
  max-width: 100%;
}

.clearfix {
  clear: both;
}

/* End Landing Page */
</style>