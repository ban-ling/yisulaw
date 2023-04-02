<template>
  <div class="container" style="background-color: #f8f8f8">
    <nav>
      <ul class="mcd-menu">
        <li>
          <a href="#" :class="{'active':choice == '个人信息'}" @click="choice = '个人信息'">
            <i class="fa fa-home"></i>
            <strong>个人信息</strong>
            <small>sweet home</small>
          </a>
        </li>
        <li>
          <a href="#" :class="{'active':choice == '集体诉讼'}" @click="choice = '集体诉讼'">
            <i class="fa fa-edit"></i>
            <strong>集体诉讼</strong>
            <small>sweet home</small>
          </a>
        </li>
        <li>
          <a href="#" :class="{'active':choice == '咨询服务'}" @click="choice = '咨询服务'">
            <i class="fa fa-gift"></i>
            <strong>咨询服务</strong>
            <small>sweet home</small>
          </a>
        </li>
        <li>
          <a href="#" :class="{'active':choice == '材料服务'}" @click="choice = '材料服务'">
            <i class="fa fa-globe"></i>
            <strong>材料服务</strong>
            <small>sweet home</small>
          </a>
        </li>
        <li>
          <a href="#" :class="{'active':choice == '出庭服务'}" @click="choice = '出庭服务'">
            <i class="fa fa-comments-o"></i>
            <strong>出庭服务</strong>
            <small>what they say</small>
          </a>
        </li>
        <li>
          <a href="#" :class="{'active':choice == '我的消息'}" @click="choice = '我的消息'">
            <i class="fa fa-picture-o"></i>
            <strong>我的消息</strong>
            <small>sweet home</small>
          </a>
        </li>
        <li>
          <a href="#" :class="{'active':choice == '我的团队'}" @click="choice = '我的团队'" v-show="islawyer">
            <i class="fa fa-envelope-o"></i>
            <strong>我的团队</strong>
            <small>drop a line</small>
          </a>
        </li>
      </ul>
    </nav>
  </div>









  <div class="whiteboard" v-show="choice.includes('个人信息')">
    <el-form :model="form2" label-width="120px" style="padding-top: 30px">

      <el-form-item label="用户名：">
        {{userAccount}}
      </el-form-item>

      <el-form-item label="性别：">
        <span v-show="isModify === false"> {{gender}} </span>
        <el-select v-show="isModify" v-model="form2.gender" placeholder="请选择性别">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>

        <el-form-item v-if="userIdenity === '律师'" label="擅长领域：">
          <span v-show="isModify === false"> {{lawyerArea}} </span>
          <el-select v-show="isModify" v-model="form2.lawyerArea" placeholder="请选择您擅长的领域">
            <el-option label="婚姻/离婚/继承" value="婚姻/离婚/继承" />
            <el-option label="交通/保险理赔" value="交通/保险理赔" />
            <el-option label="劳动/工伤赔偿" value="劳动/工伤赔偿" />
            <el-option label="债务/抵押/借贷" value="债务/抵押/借贷" />
            <el-option label="刑事诉讼" value="刑事诉讼" />
            <el-option label="合同审查/维权" value="合同审查/维权" />
            <el-option label="房地产" value="房地产" />
            <el-option label="医疗" value="医疗" />
            <el-option label="公司" value="公司" />
            <el-option label="拆迁安置" value="拆迁安置" />
            <el-option label="知识产权" value="知识产权" />
            <el-option label="经济金融" value="经济金融" />
            <el-option label="涉外纠纷" value="涉外纠纷" />
            <el-option label="教育" value="教育" />
            <el-option label="新闻舆论" value="新闻舆论" />
          </el-select>
      </el-form-item>

      <el-form-item label="手机号码：">
        <span v-show="isModify === false"> {{telephone}} </span>
      <el-input v-show="isModify" v-model="form2.telephone" style="width: 400px"/>
      </el-form-item>
      <el-form-item v-if="userIdenity === '律师'" label="团队情况：">
        <span v-show="teamId2 !== null">已加入团队（{{myTeamName}}团队）&nbsp;&nbsp;</span>
        <el-icon v-show="teamId2 !== null" color="green" size="20px"><CircleCheck /></el-icon>

        <span v-show="teamId2 === null">未加入团队&nbsp;&nbsp;</span>
        <el-icon v-show="teamId2 === null" color="red" size="20px"><CircleCloseFilled /></el-icon>



      </el-form-item>


      <el-form-item>
        <el-button type="primary" v-if="isModify === false" @click="isModify = true">修改信息</el-button>
        <el-button type="primary" v-if="isModify === true" @click="modifyUser">提交修改</el-button>
        <el-button v-show="isModify === true" @click="isModify = false">取消</el-button>
      </el-form-item>
    </el-form>
  </div>








  <div class="whiteboard" v-show="choice.includes('集体诉讼')">
    <div>
      <template v-for="(card,index) in suits">
        <el-card class="box-card2" v-show="card.isFinished !== '已完成'">
          <template #header>
            <div class="card-header">
              <span>案件名称：{{ card.title }}</span>
            </div>
          </template>
          案件描述：{{ card.description }}
          <el-button type="primary" @click="finishClassCourt(card.id,index)" round>案件已完成</el-button>
        </el-card>

      </template>
      <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          style="padding-left: 200px;padding-top: 20px"
      />

    </div>
  </div>

  <div class="whiteboard" v-show="choice.includes('咨询服务')">
    <div>
      <template v-for="card in suitAnalysises">
        <el-card class="box-card2">
          <template #header>
            <div class="card-header">
              <span>案件名称：{{ card.suitAnalysisName }}</span>
            </div>
          </template>
          案件描述：{{ card.suitAnaylsisDescription }}
        </el-card>
      </template>
      <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          style="padding-left: 200px;padding-top: 20px"
      />

    </div>
  </div>











  <div class="whiteboard" v-show="choice.includes('材料服务')">
    <div>
      <template v-for="card in suitMaterials">
        <el-card class="box-card2" v-show="card.isFinished === null">
          <template #header>
            <div class="card-header">
              <span>案件名称：{{ card.suitMaterialsName }}</span>
            </div>
          </template>
          案件描述：{{ card.suitMaterialsDescription }}

          <el-upload
              v-show="userIdenity === '律师'"
              v-model:file-list="fileList"
              class="upload-demo"
              action="http://localhost:8081/upload"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="1"
              :data="{'id':uploadSuitMaterialId,'to':'材料'}"
          >
          <el-button type="primary" @click="xu(card.id)" round>上传材料</el-button>
            <template #tip>
              <div class="el-upload__tip">
                请将材料打包成压缩包后上传
              </div>
            </template>
          </el-upload>
          <el-button type="primary" @click="download(card.filepath)" v-show="userIdenity === '当事人' && card.filepath != null" round>下载材料</el-button>
          <el-button type="primary" @click="toCourt(card)" v-show="userIdenity === '当事人' && card.filepath != null" round>已下载材料，开始出庭流程</el-button>
        </el-card>
      </template>
      <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          style="padding-left: 200px;padding-top: 20px"
      />

    </div>
  </div>













  <div class="whiteboard" v-show="choice.includes('出庭服务')">
    <div>
      <template v-for="(card,index) in suitCourts" :key="index">
        <el-card class="box-card2" v-show="card.isFinished !== 'finish'">
          <template #header>
            <div class="card-header">
              <span>案件名称：{{ card.suitCourtName }}</span>
            </div>
          </template>
          案件描述：{{ card.suitCourtDescription }}

          <p v-if="card.userSign !== null" @click="downloadHeTong(card.heTongPath)">电子合同下载</p>

          <p v-show="userIdenity === '当事人' && card.isFinished === 'check'">律师提出：出庭案件已完成</p>

          <el-button v-show="userIdenity === '当事人'" type="primary"  @click="userFinishCourt(card.id,index)" round>案件已完成</el-button>

          <el-upload
              v-show="userIdenity === '律师' && card.userSign != null"
              v-model:file-list="fileList2"
              class="upload-demo"
              action="http://localhost:8081/lawyerSign"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="1"
              :data="{'id':uploadSuitCourtId}"

          >
            <el-button type="primary"  @click="uploadLawyerSign(card.id)" round>上传手写签名</el-button>
            <template #tip>
              <div class="el-upload__tip">
                请上传手写签名
              </div>
            </template>
          </el-upload>

<!--          <el-button v-show="card." round>案件已完成</el-button>-->

          <el-button type="primary" v-show="userIdenity === '律师' && card.isFinished === null"  @click="lawyerFinishCourt(card.id,index)" round>案件已完成</el-button>
          <el-button type="primary" v-show="userIdenity === '律师' && card.isFinished === 'check'" round>等待用户反馈...</el-button>

        </el-card>
      </template>
      <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          style="padding-left: 200px;padding-top: 20px"
      />

    </div>
  </div>

  <div class="whiteboard" v-show="choice.includes('我的消息')">
  </div>

  <div class="whiteboard" v-show="choice.includes('我的团队') && islawyer">
    <el-form :model="form" label-width="120px">
      <el-form-item label="请输入团队号：" style="margin-top: 30px">
        <el-input v-model="form.id" style="width: 600px" placeholder="请输入要查找的团队ID"/>
        <el-button type="primary" @click="findTeamById" style="margin-left: 30px">查找团队</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建团队</el-button>
        <el-button v-show="teamId2 !== null" @click="isMyTeam = 'yes'">取消</el-button>
        <el-button v-show="teamId2 === null" @click="isMyTeam = 'no'">取消</el-button>
      </el-form-item>
    </el-form>

    <div v-show="isMyTeam === 'yes'">我的团队：{{ myTeamName }}</div>

    <div v-show="isMyTeam === 'no'">我的团队：未加入团队</div>

    <div v-show="isMyTeam === 'find' && team !== null">搜索结果:</div>

    <div v-show="isMyTeam === 'find' && team === null">
      <el-empty description="未找到团队" />
    </div>

    <div v-show="isMyTeam === 'find' && team !== null">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>团队名：{{ teamName }}</span>
            <el-button class="button" @click="enterTeam(form.id)">申请加入团队</el-button>
          </div>
        </template>
      </el-card>
    </div>

  </div>


</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import myAxios from "../plugins/myAxios";

import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'
import axios from "axios";
import {useRouter} from "vue-router";

const isModify = ref(false);
const userId2 = ref(0)


const teamId2 = ref(0);
const userAccount = ref();
const gender = ref('');
const telephone = ref('');
const email = ref('')
const lawyerArea = ref('')

const isFinished = ref('')

const tmps = (valuea:string) =>{
  isFinished.value = valuea
}

const downloadHeTong = (heTongPath) =>{
  window.open(heTongPath)
}

const fileList = ref<UploadUserFile[]>([])

const fileList2 = ref<UploadUserFile[]>([])

const uploadSuitMaterialId = ref(0)

const xu = (id:number) =>{
  uploadSuitMaterialId.value = id;
}


const uploadSuitCourtId = ref(0)

const uploadLawyerSign = (id:number) =>{
  uploadSuitCourtId.value = id
}


const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}
const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
      `Cancel the transfert of ${uploadFile.name} ?`
  ).then(
      () => true,
      () => false
  )
}



const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = []
  fileList.value.push(uploadFile);
}





const download = async (filepath:string) =>{
  if(filepath != null) {
    window.open(filepath)
  }
}

const router = useRouter();

const toCourt = async (suitmaterial: any) =>{
  const res = await myAxios.post("/modifySuitMaterials",{
    id:suitmaterial.id,
    isFinished:'finish'
  })
  router.push({
    path: '/SuitCourt',
    query: suitmaterial
  })
}



const enterTeam = async (id:number) =>{
  const res = await myAxios.post("/modifyUser",{
    id:userId2.value,
    teamId:id
  })
  const new_user = res.data;
  sessionStorage.setItem("user",JSON.stringify(new_user))
  form.id = new_user.teamId;
  teamId2.value = id

  const resx = await myAxios.post("/findTeamById",{
    id:id
  })
  myTeam.value = resx.data;
  myTeamName.value = myTeam.value.teamName;

  console.log("加入成功！")
  isMyTeam.value = 'yes'

}




const a = 1;



let choice = ref('');

let suits = ref([]);

let suitAnalysises = ref([]);

let suitMaterials = ref([]);

let suitCourts = ref([]);

const islawyer = ref(true)

const team = ref();

const teamName = ref('')

const form = reactive({
  id: '',
})

const isMyTeam = ref('')

const myTeam = ref();

const myTeamName = ref('')

const usersTelephone = ref([])

const finishClassCourt = async (id:number,index:number) =>{
  const res = await myAxios.post("/modifyClassCourt",{
    id:id,
    isFinished:'已完成'
  })
  const newClassCourt =  res.data;
  suits.value.splice(index,1,newClassCourt);
  const res2 = await myAxios.post("/findClassCourtConcreteByClassCourtId",{
    classCourtId:id
  })
  // 在这里加一个弹出框，弹出所有跟集体诉讼相关的用户的联系方式

}



const lawyerFinishCourt = async (id:number,index:number) =>{
  const res = await myAxios.post("/modifySuitCourt",{
    id:id,
    isFinished:'check'
  })
  const newsuitcourt = res.data
  alert("提交成功！请等待当事人回馈")
  suitCourts.value.splice(index,1,newsuitcourt)
}

const userFinishCourt = async (id:number,index:number) =>{
  const res = await myAxios.post("/modifySuitCourt",{
    id:id,
    isFinished:'finish'
  })
  const newsuitcourt = res.data
  suitCourts.value.splice(index,1,newsuitcourt)
  alert("诉讼完成！")

}



const dialogVisible = ref(false)

const uploadClick = async (id:number) =>{
  dialogVisible.value = true

}

const teamCreaterId = ref()
const findTeamById = async () =>{
  const res = await myAxios.post("/findTeamById",{
    id:form.id
  })
  team.value = res.data;
  teamName.value = team.value.teamName
  isMyTeam.value = 'find'
  teamCreaterId.value = team.value.createrId;
}

const userIdenity = ref('')



const form2 = reactive({
  id:userId2,
  userAccount:'',
  gender:'',
  telephone:'',
  email:'',
  lawyerArea:''
})


onMounted( async () => {
  const user = JSON.parse(sessionStorage.getItem("user"))
  const userId = user.id;
  const idenity = user.idenity;
  userIdenity.value = user.idenity;
  const teamId = user.teamId;


  userId2.value = userId;
  teamId2.value = user.teamId;
  userAccount.value = user.userAccount;
  gender.value = user.gender;
  telephone.value = user.telephone;
  email.value = user.email;
  lawyerArea.value = user.lawyerArea;

  form2.gender = gender.value;
  form2.telephone = telephone.value;
  form2.email = email.value;
  form2.lawyerArea = lawyerArea.value;


  if(idenity === '当事人'){
    islawyer.value = false;
    const res = await myAxios.post("/findClassCourtByCreaterId",{
      createrId:userId
    })

    suits.value = res.data

    const res2 = await myAxios.post("/findSuitAnalysisByUserId",{
      userId:userId
    })
    suitAnalysises.value = res2.data

    const res3 = await myAxios.post("/findSuitMaterialsByUserId",{
      userId:userId
    })
    suitMaterials.value = res3.data

    const res4 = await myAxios.post("/findSuitCourtByUserId",{
      userId:userId
    })
    suitCourts.value = res4.data
  }

  else{

    const res = await myAxios.post("/findClassCourtByLawyerId",{
      lawyerId:userId
    })

    suits.value = res.data

    const res2 = await myAxios.post("/findSuitAnalysisByLawyerId",{
      lawyerId:userId
    })
    suitAnalysises.value = res2.data

    const res3 = await myAxios.post("/findSuitMaterialsByLawyerId",{
      lawyerId:userId
    })
    suitMaterials.value = res3.data

    const res4 = await myAxios.post("/findSuitCourtByLawyerId",{
      lawyerId:userId
    })
    suitCourts.value = res4.data
  }

  if(teamId !== null && teamId !== undefined){
    isMyTeam.value = 'yes';
    const resx = await myAxios.post("/findTeamById",{
      id:teamId
    })
    myTeam.value = resx.data;
    myTeamName.value = myTeam.value.teamName;
  }
  else{
    isMyTeam.value = 'no'
  }
})




const modifyUser = async () => {
  const res = await myAxios.post("/modifyUser",{
    id:form2.id,
    userAccount:form2.userAccount,
    gender:form2.gender,
    telephone:form2.telephone,
    email:form2.email,
    lawyerArea:form2.lawyerArea
  })
  alert("修改成功！")
  const new_user = res.data;
  // let user = JSON.parse(sessionStorage.getItem("user"))
  // user.gender = new_user.gender;
  // user.telephone = new_user.telephone;
  // user.email = new_user.email;
  // user.lawyerArea = new_user.lawyerArea;
  sessionStorage.setItem("user",JSON.stringify(new_user))
  gender.value = new_user.gender;
  telephone.value = new_user.telephone;
  email.value = new_user.email;
  lawyerArea.value = new_user.lawyerArea;

  isModify.value = false;
}





const onSubmit = () => {
  console.log('submit!')
}




</script>

<style scoped>

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-left: 120px;
  height: 200px;
  width: 600px;
  border-radius: 10px;
}
















.whiteboard {
  position: absolute;
  top: 100px;
  left: 420px;
  width: 900px;
  height: 480px;

  background: #fff;
  box-shadow: 0 6px 13px 0 rgba(0,0,0,.1);
  border-radius: 10px;
  z-index: 2;
  box-sizing: border-box;
}


body {
  background: #EEE;
  overflow-x:hidden;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}

.container {
  position: relative;
  margin: 0px auto;
  padding: 50px 0;
  clear: both;
}
@media only screen and (min-width: 1200px) {
  .container {
    width: 1210px;
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .container {
    width: 1030px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
  .container {
    width: 682px;
  }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .container {
    width: 428px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 479px) {
  .container {
    width: 320px;
    margin: 0 auto;
  }
}



.mcd-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #FFF;
  /*height: 100px;*/
  border-width: thick;
  border-color: #535bf2;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;



  /* == */
  width: 250px;
  /* == */
}
.mcd-menu li {
  position: relative;
  /*float:left;*/
}
.mcd-menu li a {
  display: block;
  text-decoration: none;
  padding: 12px 20px;
  color: #777;
  /*text-align: center;
  border-right: 1px solid #E7E7E7;*/

  /* == */
  text-align: left;
  height: 36px;
  position: relative;
  border-bottom: 1px solid #EEE;
  /* == */
}
.mcd-menu li a i {
  /*display: block;
  font-size: 30px;
  margin-bottom: 10px;*/

  /* == */
  float: left;
  font-size: 20px;
  margin: 0 10px 0 0;
  /* == */

}
/* == */
.mcd-menu li a p {
  float: left;
  margin: 0 ;
}
/* == */

.mcd-menu li a strong {
  display: block;
  text-transform: uppercase;
}
.mcd-menu li a small {
  display: block;
  font-size: 10px;
}

.mcd-menu li a i, .mcd-menu li a strong, .mcd-menu li a small {
  position: relative;

  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
}
.mcd-menu li:hover > a i {
  opacity: 1;
  -webkit-animation: moveFromTop 300ms ease-in-out;
  -moz-animation: moveFromTop 300ms ease-in-out;
  -ms-animation: moveFromTop 300ms ease-in-out;
  -o-animation: moveFromTop 300ms ease-in-out;
  animation: moveFromTop 300ms ease-in-out;
}
.mcd-menu li:hover a strong {
  opacity: 1;
  -webkit-animation: moveFromLeft 300ms ease-in-out;
  -moz-animation: moveFromLeft 300ms ease-in-out;
  -ms-animation: moveFromLeft 300ms ease-in-out;
  -o-animation: moveFromLeft 300ms ease-in-out;
  animation: moveFromLeft 300ms ease-in-out;
}
.mcd-menu li:hover a small {
  opacity: 1;
  -webkit-animation: moveFromRight 300ms ease-in-out;
  -moz-animation: moveFromRight 300ms ease-in-out;
  -ms-animation: moveFromRight 300ms ease-in-out;
  -o-animation: moveFromRight 300ms ease-in-out;
  animation: moveFromRight 300ms ease-in-out;
}

.mcd-menu li:hover > a {
  color: #e67e22;
}
.mcd-menu li a.active {
  position: relative;
  color: #e67e22;
  border:0;
  /*border-top: 4px solid #e67e22;
  border-bottom: 4px solid #e67e22;
  margin-top: -4px;*/
  box-shadow: 0 0 5px #DDD;
  -moz-box-shadow: 0 0 5px #DDD;
  -webkit-box-shadow: 0 0 5px #DDD;

  /* == */
  border-left: 4px solid #e67e22;
  border-right: 4px solid #e67e22;
  margin: 0 -4px;
  /* == */
}
.mcd-menu li a.active:before {
  content: "";
  position: absolute;
  /*top: 0;
  left: 45%;
  border-top: 5px solid #e67e22;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/

  /* == */
  top: 42%;
  left: 0;
  border-left: 5px solid #e67e22;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  /* == */
}

/* == */
.mcd-menu li a.active:after {
  content: "";
  position: absolute;
  top: 42%;
  right: 0;
  border-right: 5px solid #e67e22;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
/* == */

@-webkit-keyframes moveFromTop {
  from {
    opacity: 0;
    -webkit-transform: translateY(200%);
    -moz-transform: translateY(200%);
    -ms-transform: translateY(200%);
    -o-transform: translateY(200%);
    transform: translateY(200%);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -ms-transform: translateY(0%);
    -o-transform: translateY(0%);
    transform: translateY(0%);
  }
}
@-webkit-keyframes moveFromLeft {
  from {
    opacity: 0;
    -webkit-transform: translateX(200%);
    -moz-transform: translateX(200%);
    -ms-transform: translateX(200%);
    -o-transform: translateX(200%);
    transform: translateX(200%);
  }
  to {
    opacity: 1;
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-webkit-keyframes moveFromRight {
  from {
    opacity: 0;
    -webkit-transform: translateX(-200%);
    -moz-transform: translateX(-200%);
    -ms-transform: translateX(-200%);
    -o-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  to {
    opacity: 1;
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}



.mcd-menu li ul,
.mcd-menu li ul li ul {
  position: absolute;
  height: auto;
  min-width: 200px;
  padding: 0;
  margin: 0;
  background: #FFF;
  /*border-top: 4px solid #e67e22;*/
  opacity: 0;
  visibility: hidden;
  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
  /*top: 130px;*/
  z-index: 1000;

  /* == */
  left:280px;
  top: 0px;
  border-left: 4px solid #e67e22;
  /* == */
}
.mcd-menu li ul:before {
  content: "";
  position: absolute;
  /*top: -8px;
  left: 23%;
  border-bottom: 5px solid #e67e22;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/

  /* == */
  top: 25px;
  left: -9px;
  border-right: 5px solid #e67e22;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  /* == */
}
.mcd-menu li:hover > ul,
.mcd-menu li ul li:hover > ul {
  display: block;
  opacity: 1;
  visibility: visible;
  /*top: 100px;*/

  /* == */
  left:250px;
  /* == */
}
/*.mcd-menu li ul li {
  float: none;
}*/
.mcd-menu li ul li a {
  padding: 10px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid #EEE;

  /* == */
  height: auto;
  /* == */
}
.mcd-menu li ul li a i {
  font-size: 16px;
  display: inline-block;
  margin: 0 10px 0 0;
}
.mcd-menu li ul li ul {
  left: 230px;
  top: 0;
  border: 0;
  border-left: 4px solid #e67e22;
}
.mcd-menu li ul li ul:before {
  content: "";
  position: absolute;
  top: 15px;
  /*left: -14px;*/
  /* == */
  left: -9px;
  /* == */
  border-right: 5px solid #e67e22;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
}
.mcd-menu li ul li:hover > ul {
  top: 0px;
  left: 200px;
}



/*.mcd-menu li.float {
  float: right;
}*/
.mcd-menu li a.search {
  /*padding: 29px 20px 30px 10px;*/
  padding: 10px 10px 15px 10px;
  clear: both;
}
.mcd-menu li a.search i {
  margin: 0;
  display: inline-block;
  font-size: 18px;
}
.mcd-menu li a.search input {
  border: 1px solid #EEE;
  padding: 10px;
  background: #FFF;
  outline: none;
  color: #777;

  /* == */
  width:170px;
  float:left;
  /* == */
}
.mcd-menu li a.search button {
  border: 1px solid #e67e22;
  /*padding: 10px;*/
  background: #e67e22;
  outline: none;
  color: #FFF;
  margin-left: -4px;

  /* == */
  float:left;
  padding: 10px 10px 11px 10px;
  /* == */
}
.mcd-menu li a.search input:focus {
  border: 1px solid #e67e22;
}


.search-mobile {
  display:none !important;
  background:#e67e22;
  border-left:1px solid #e67e22;
  border-radius:0 3px 3px 0;
}
.search-mobile i {
  color:#FFF;
  margin:0 !important;
}


@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .mcd-menu {
    margin-left:10px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
  .mcd-menu {
    width: 200px;
  }
  .mcd-menu li a {
    height:30px;
  }
  .mcd-menu li a i {
    font-size: 22px;
  }
  .mcd-menu li a strong {
    font-size: 12px;
  }
  .mcd-menu li a small {
    font-size: 10px;
  }
  .mcd-menu li a.search input {
    width: 120px;
    font-size: 12px;
  }
  .mcd-menu li a.search buton{
    padding: 8px 10px 9px 10px;
  }
  .mcd-menu li > ul {
    min-width:180px;
  }
  .mcd-menu li:hover > ul {
    min-width:180px;
    left:200px;
  }
  .mcd-menu li ul li > ul, .mcd-menu li ul li ul li > ul {
    min-width:150px;
  }
  .mcd-menu li ul li:hover > ul {
    left:180px;
    min-width:150px;
  }
  .mcd-menu li ul li ul li:hover > ul {
    left:150px;
    min-width:150px;
  }
  .mcd-menu li ul a {
    font-size:12px;
  }
  .mcd-menu li ul a i {
    font-size:14px;
  }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {

  .mcd-menu {
    width: 50px;
  }
  .mcd-menu li a {
    position: relative;
    padding: 12px 16px;
    height:20px;
  }
  .mcd-menu li a small {
    display: none;
  }
  .mcd-menu li a strong {
    display: none;
  }
  .mcd-menu li a:hover strong,.mcd-menu li a.active strong {
    display:block;
    font-size:10px;
    padding:3px 0;
    position:absolute;
    bottom:0px;
    left:0;
    background:#e67e22;
    color:#FFF;
    min-width:100%;
    text-transform:lowercase;
    font-weight:normal;
    text-align:center;
  }
  .mcd-menu li .search {
    display: none;
  }

  .mcd-menu li > ul {
    min-width:180px;
    left:70px;
  }
  .mcd-menu li:hover > ul {
    min-width:180px;
    left:50px;
  }
  .mcd-menu li ul li > ul, .mcd-menu li ul li ul li > ul {
    min-width:150px;
  }
  .mcd-menu li ul li:hover > ul {
    left:180px;
    min-width:150px;
  }
  .mcd-menu li ul li ul li > ul {
    left:35px;
    top: 45px;
    border:0;
    border-top:4px solid #e67e22;
  }
  .mcd-menu li ul li ul li > ul:before {
    left:30px;
    top: -9px;
    border:0;
    border-bottom:5px solid #e67e22;
    border-left:5px solid transparent;
    border-right:5px solid transparent;
  }
  .mcd-menu li ul li ul li:hover > ul {
    left:30px;
    min-width:150px;
    top: 35px;
  }
  .mcd-menu li ul a {
    font-size:12px;
  }
  .mcd-menu li ul a i {
    font-size:14px;
  }

}

@media only screen and (max-width: 479px) {
  .mcd-menu {
    width: 50px;
  }
  .mcd-menu li a {
    position: relative;
    padding: 12px 16px;
    height:20px;
  }
  .mcd-menu li a small {
    display: none;
  }
  .mcd-menu li a strong {
    display: none;
  }
  .mcd-menu li a:hover strong,.mcd-menu li a.active strong {
    display:block;
    font-size:10px;
    padding:3px 0;
    position:absolute;
    bottom:0px;
    left:0;
    background:#e67e22;
    color:#FFF;
    min-width:100%;
    text-transform:lowercase;
    font-weight:normal;
    text-align:center;
  }
  .mcd-menu li .search {
    display: none;
  }

  .mcd-menu li > ul {
    min-width:180px;
    left:70px;
  }
  .mcd-menu li:hover > ul {
    min-width:180px;
    left:50px;
  }
  .mcd-menu li ul li > ul, .mcd-menu li ul li ul li > ul {
    min-width:150px;
  }
  .mcd-menu li ul li:hover > ul {
    left:180px;
    min-width:150px;
  }
  .mcd-menu li ul li ul li > ul {
    left:35px;
    top: 45px;
    border:0;
    border-top:4px solid #e67e22;
  }
  .mcd-menu li ul li ul li > ul:before {
    left:30px;
    top: -9px;
    border:0;
    border-bottom:5px solid #e67e22;
    border-left:5px solid transparent;
    border-right:5px solid transparent;
  }
  .mcd-menu li ul li ul li:hover > ul {
    left:30px;
    min-width:150px;
    top: 35px;
  }
  .mcd-menu li ul a {
    font-size:12px;
  }
  .mcd-menu li ul a i {
    font-size:14px;
  }

}

</style>