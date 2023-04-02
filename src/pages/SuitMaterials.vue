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
                src="https://static001.geekbang.org/resource/image/19/6d/191bb0119563173895c6e526bb2f906d.jpg?x-oss-process=image/resize,w_137,h_180/format,webp"
                class="image"
            />
            <div style="padding: 14px">
              <span class="lawyername">{{userAccount1}}</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" @click="toMaterials(lawyer1)">选择</el-button>
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
                <el-button text class="button" @click="toMaterials(lawyer2)">选择</el-button>
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
                src="https://static001.geekbang.org/resource/image/3b/bd/3b0b12b45d0a8c6375b2bef33e81d5bd.jpg?x-oss-process=image/resize,w_137,h_180/format,webp"
                class="image"
            />
            <div style="padding: 14px">
              <span class="lawyername">{{ userAccount3 }}</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" @click="toMaterials(lawyer3)">选择</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <button>回到主页</button>

    </div>
    <div class="slider__content">

    </div>
  </div>



  <el-dialog v-model="dialogVisible" title="材料撰写">
    <el-form :model="form">
      <el-form-item label="请输入案件标题">
        <el-input v-model="form.suitMaterialsName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="请在下列框内粘贴咨询律师提供的逻辑复盘">
        <el-input v-model="form.suitMaterialsDescription" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
            type="primary"
            @click="createSuitMaterials(form.suitMaterialsName,form.suitMaterialsDescription)"
        >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>


</template>

<script setup>
import myAxios from "../plugins/myAxios";
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

let lawyers = ref([]);
let words = ref('');

const dialogVisible = ref(false)
let form = reactive({
  suitMaterialsName:'',
  suitMaterialsDescription:''
})

let lawyer1 = ref()
let lawyer2 = ref()
let lawyer3 = ref()

const route = useRoute()

const area = route.query.area;
console.log("area="+area)

let userAccount1 = ref('')
let userAccount2 = ref('')
let userAccount3 = ref('')


onMounted(async () =>{
  words.value = '请选择材料律师，为您开始材料撰写服务！'
  const res = await myAxios.post('/findUsersByElement',{
    element:'lawyerArea',
    value:area,
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
const toMaterials = async (lawyer) => {
  dialogVisible.value = true
  result_lawyer.value = lawyer;
  lawyer_id.value = lawyer.id;
}

const router = useRouter();

const createSuitMaterials = async (suitMaterialsName,suitMaterialsDescription) =>{
  const user = JSON.parse(sessionStorage.getItem("user"))
  const userId = user.id;
  const lawyerId = result_lawyer.value.id;
  const area = route.query.area;
  console.log("route.area="+area)



  const res = await myAxios.post('/createSuitMaterials',{
    userId:userId,
    lawyerId:lawyerId,
    suitMaterialsName:suitMaterialsName,
    suitMaterialsDescription:suitMaterialsDescription,
    area:area
  })
  alert('创建成功！')
  dialogVisible.value = false;
  router.push('/UserCenter')
}

// console.log("res.data="+res.data[0])

//
//
//
// console.log("area="+area)
// console.log("lawyers="+lawyers.value[0])
//
//
//
// console.log("res"+res)
//
//
// console.log("area.value="+area)





</script>

<style scoped>
html, body {
  height: 100%;
}

.lawyername{
  margin-left: 130px;
}

.image{
  height: 50%;
  width: 50%;
  margin-left:80px;
  margin-top: 10px;
  box-shadow: 5px 5px 5px
}



.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  margin-left: 80px;
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