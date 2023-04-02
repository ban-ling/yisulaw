<template>
  <div class="all">

    <el-button type="primary" @click="dialogVisible = true">
      发布信息
    </el-button>


    <el-dialog v-model="dialogVisible" title="发布信息">
      <el-form :model="form">
        <el-form-item label="请输入信息标题">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="请输入信息描述">
          <el-input v-model="form.description" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
            type="primary"
            @click="createMessage(form.title,form.description)"
        >
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>


  <template v-for="message in MessageList">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{message.title}}</span>
          <span>发布者：{{message.createrId}}</span>
<!--          <el-button type="primary" round>Primary</el-button>-->
        </div>
      </template>
      <div class="text item">内容简介：{{ message.description}}</div>
    </el-card>
  </template>

  </div>
</template>

<script setup>

import myAxios from "../plugins/myAxios";
import {onMounted, reactive, ref} from "vue";

let MessageList = ref([]);

const dialogVisible = ref(false)

const user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}

const form = reactive({
  title:'',
  description:''
})

const createMessage = async (title,description) =>{
  const res = await myAxios.post("/createMessage",{
    createId:user.id,
    title:title,
    description:description
  })
  const id = res.data
  const res2 = await myAxios.post("/findMessageById",{
    id:id
  })
  const message = res2.data;
  MessageList.value.push(message);
  dialogVisible.value = false;
  alert("发布成功！")
}

onMounted(async () =>{
  const res = (await myAxios.post('/findAllMessage')).data;

  MessageList.value = res;
  console.log(res)
})


</script>

<style scoped>
.all{
  background-image: url("../../public/4_内背景_1920.jpg");
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