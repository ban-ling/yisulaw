<template>
  <div class="all">
<!--  <el-button type="primary" @click="changedialogVisible">Primary</el-button>-->

  <el-button type="primary" @click="dialogVisible = true">
    创建集体诉讼
  </el-button>


  <el-dialog v-model="dialogVisible" title="创建集体诉讼">
      <el-form :model="form">
        <el-form-item label="请输入案件标题">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="请输入案件描述">
          <el-input v-model="form.description" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
            type="primary"
            @click="createClassCourt(form.title,form.description)"
        >
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>






  <template v-for="(classCourt,index) in ClassCourtList">
    <div v-show="checkit(classCourt,index)"></div>
  <el-card class="box-card" v-show="classCourt.isFinished === null">
    <template #header>
      <div class="card-header">
        <span>{{classCourt.title}}</span>
        <span>发布者：{{classCourt.createrName}}</span>
        <el-button type="primary" v-if="status === '当事人' && classCourt.createrId !== userGetId && classCourt.is === false" @click="join(classCourt,index)" round>加入诉讼</el-button>
        <el-button type="primary" v-if="status === '律师' && classCourt.lawyerId === null" @click="takeHand(classCourt.id,index)" round>接手</el-button>
        <el-button type="success" v-show="classCourt.is === true && classCourt.createrId !== userGetId" plain>已加入</el-button>
        <el-button type="success" v-show="classCourt.createrId === userGetId" plain>已发布</el-button>
        <el-button type="success" v-if="status === '律师' && classCourt.lawyerId === userGetId" plain>已接手</el-button>
      </div>
    </template>
    <div class="text item">内容简介：{{ classCourt.description}}</div>
  </el-card>
  </template>

  </div>
</template>

<script setup>

import myAxios from "../plugins/myAxios";
import {onMounted, reactive, ref} from "vue";
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const status = ref('')

let ClassCourtList = ref([]);
const user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
const userGetId = ref(0);


const takeHand = async (id,index) => {
  const res = await myAxios.post("/modifyClassCourt",{
    id:id,
    lawyerId:user.id
  })
  const newClassCourt = res.data;
  ClassCourtList.value.splice(index,1,newClassCourt);
}

console.log("classcourts="+ClassCourtList.value)

const checkit = async (classCourt,index) => {
  console.log("checkit运行")
  const res = await myAxios.post("/findClassCourtConcreteByUserIdAndClassCourtId",{
    userId:userGetId.value,
    classCourtId:classCourt.id
  })
  const tmp = res.data
  console.log("tmp===="+res.data)
  classCourt.is = tmp;
  ClassCourtList.value.splice(index,1,classCourt)

  // console.log("tmp="+tmp)
  // if(tmp === null || tmp === undefined){
  //   console.log("result======false")
  //   return false;
  // }
  // else{
  //   console.log("result======true")
  //   return true
  // }
}

const join = async (classCourt,index) =>{
  const id = classCourt.id;
  const res = (await myAxios.post('/createClassCourtConcrete',{
    userId:user.id,
    classCourtId:id,
    userAccount:user.userAccount
  }));
  const res3 = (await myAxios.post('/findClassCourtById',{
    id:id
  }));
  let peopleNumber = ref(0);
  peopleNumber.value = res3.data.peopleNumber;
  console.log("peoplenumber="+peopleNumber.value)
  const res2 = (await myAxios.post('/modifyClassCourt',{
    id:id,
    peopleNumber:peopleNumber.value+1
  }));
  let classcourt = res2.data
  classcourt.is = true
  ClassCourtList.value.splice(index,1,classcourt)
}


onMounted(async () =>{
  const user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
  const res = (await myAxios.post('/findAllClassCourt')).data;
  userGetId.value = user.id;

  ClassCourtList.value = res;

  status.value = user.idenity;
  console.log(res)
})



const form = reactive({
  title:'',
  description:''
})

const createClassCourt = async (title,description) =>{
  const user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
  console.log(user.id);


  // const res1 = await myAxios.post("/findUsersByElement",{
  //   'element':'id',
  //   'value':user.id
  // });
  //
  // const real_user = res1.data;

  const res = await myAxios.post("/createClassCourt",{
    'title':title,
    'description':description,
    'createrId':user.id,
    'createrName':user.userAccount
  });
  const id = res.data
  const res2 = await myAxios.post("/findClassCourtById",{
    id:id
  })
  const classcourt = res2.data
  ClassCourtList.value.push(classcourt)
  dialogVisible.value = false;
  alert("创建成功！")
}


</script>

<style scoped>
.all{
  background-image: url("../../public/彩色背景.jpg");
  height: 1275px;
}


.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-top: 20px;
  margin-bottom: 30px;
}

.box-card {
  margin-left: 500px;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: 30px;
  width: 480px;
}
</style>