
<template>
  <div class="common-layout">
    <el-container>

      <el-header style="margin: 0px;padding: 0px" v-if="$route.name !== 'Login' && $route.name !== 'Welcome'">

        <UpMenu />

      </el-header>


      <el-main style="margin: 0px;padding: 0px">


        <div id="content">
          <router-view />
        </div>


      </el-main>

    </el-container>
  </div>
</template>


<script lang="ts" setup>
import LeftMenu from '../components/UpMenu.vue'
import PageHeader from '../components/PageHeader.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Main from "../pages/Main.vue";
import UpMenu from "../components/UpMenu.vue";
import Welcome from "../pages/Welcome.vue"

const router = useRouter()
onMounted(async () => {

  router.push('/Welcome')

})


</script>

<style>
el-container {
  height: 100%;
  width: 100%;
}
</style>
