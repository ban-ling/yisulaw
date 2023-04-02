<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="padding-left: 450px"
      router
  >
    <el-menu-item index="/Main">高级律师服务</el-menu-item>
    <el-menu-item index="/ClassCourt">集体诉讼</el-menu-item>
    <el-menu-item index="/LawShop">法律商城</el-menu-item>
    <el-menu-item index="/SubmitQuickSuit" v-show="status === '当事人'">易诉一下</el-menu-item>
    <el-menu-item index="/SuitAnalysis" v-show="status === '律师'">等待咨询</el-menu-item>
    <el-menu-item index="/Message">信息发布</el-menu-item>
    <el-menu-item style="display: flex;margin: 0px 0 0 150px;position: relative;" index="/UserCenter" v-if="islogined === true">{{ userAccount }}（已登录）</el-menu-item>



    <el-link class="header-area" @click="clickto('Login')" v-if="islogined === false">注册/登录</el-link>

    <el-link class="header-area" @click="logout()" v-if="islogined === true" style="margin-left: 10px">注销</el-link>
  </el-menu>



  <div class="h-6" />

</template>


<script lang="ts" setup>
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import {onMounted, ref} from 'vue'
import routes from '../config/route'
import {get} from "jquery";

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

const router = useRouter()

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}


const status = ref('')

onMounted( async () => {
  const token = window.sessionStorage.getItem("token")
  console.log("token="+token)
  userAccount.value = "";
  islogined.value = false;
  const tmp = window.sessionStorage.getItem("userAccount");
  if(tmp !== null){
    userAccount.value = tmp;
  }

  if(userAccount.value !== ""){
    islogined.value = true;
  }
  console.log("tmp="+tmp)

  const getuser = sessionStorage.getItem("user")
  console.log('getuser='+getuser)
  if(getuser !== null){
    const user = JSON.parse(getuser);
    const idenity = user.idenity;

    if(idenity === '当事人'){
      status.value = '当事人'
    }
    else{
      status.value = '律师'
    }
  }


})

/**
 * 根据路由切换标题
 */
router.beforeEach(to => {
  const toPath = to.path
  const route = routes.find(route => {
    return toPath === route.path
  })
})





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





</script>



<style scoped>
.header-area{
  display: flex;
  margin: 0px 0 0 250px;
  position: relative;
}
</style>