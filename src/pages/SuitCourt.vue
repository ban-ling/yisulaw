<template>
  <div class="slider__slide" data-slide="2">
    <div class="slider__wrap">
      <div class="slider__back"></div>
    </div>
    <div class="slider__inner" style="padding-top: 50px">
      <h1 style="color:black;text-align: center;font-family: 'Roboto', sans-serif;">{{ words }}</h1>

      <el-row style="margin-left: 100px;" >
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
              <span class="lawyername">{{userAccount1}}</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" @click="toCourt(lawyer1)">选择</el-button>
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
              <span class="lawyername">{{userAccount2}}</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" @click="toCourt(lawyer2)">选择</el-button>
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
              <span class="lawyername">{{ userAccount3 }}</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" @click="toCourt(lawyer3)">选择</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

<!--      <button>回到主页</button>-->

    </div>
    <div class="slider__content">

    </div>
  </div>



  <el-dialog v-model="dialogVisible" title="上传签名">
    <el-upload
        class="avatar-uploader"
        action="http://localhost:8081/userSign"

        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :data="{'id':suitCourtId}"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
            type="primary"
            @click="toUserCenter"
        >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>


</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {

  return true
}











import myAxios from "../plugins/myAxios";
import {onMounted, reactive} from "vue";
import {useRoute, useRouter} from "vue-router";

let lawyers = ref([]);
let words = ref('');

const dialogVisible = ref(false)


const suitCourtId = ref(0)

let lawyer1 = ref()
let lawyer2 = ref()
let lawyer3 = ref()




let userAccount1 = ref('')
let userAccount2 = ref('')
let userAccount3 = ref('')


onMounted(async () =>{
  const route = useRoute();

  const lawyerArea = route.query.area;




  words.value = '请选择出庭律师，作为代理人为您出庭！'
  const res = await myAxios.post('/findUsersByElement',{
    element:'lawyerArea',
    value:lawyerArea,
  })
  console.log(res.data)
  lawyers.value = res.data;

  userAccount1.value = lawyers.value[0].userAccount
  userAccount2.value = lawyers.value[1].userAccount
  userAccount3.value = lawyers.value[2].userAccount

  lawyer1.value = lawyers.value[0]
  lawyer2.value = lawyers.value[1]
  lawyer3.value = lawyers.value[2]
})

console.log("areatype="+typeof area)


const result_lawyer = ref()
const lawyer_id = ref(0)
const route = useRoute();
const toCourt = async (lawyer) => {

  dialogVisible.value = true
  result_lawyer.value = lawyer;
  lawyer_id.value = lawyer.id;

  const suitCourtName = route.query.suitMaterialsName;
  const suitCourtDescription = route.query.suitMaterialsDescription;
  const lawyerArea = route.query.area;

  const user = JSON.parse(sessionStorage.getItem("user"))
  const userId = user.id;
  const lawyerId = result_lawyer.value.id;

  const res = await myAxios.post("/createSuitCourt",{
    userId:userId,
    lawyerId:lawyerId,
    suitCourtName:suitCourtName,
    suitCourtDescription:suitCourtDescription,
    area:lawyerArea

  })

  suitCourtId.value = res.data;
}


const router = useRouter();

const toUserCenter = async () =>{

  router.push("/UserCenter")
}





</script>

<style scoped>

.lawyername{
  margin-left: 130px;
}

.image{
  height: 60%;
  width: 60%;
  margin-left:60px;
  margin-top: 10px;
  box-shadow: 5px 5px 5px
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

  <style>
  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

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
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
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