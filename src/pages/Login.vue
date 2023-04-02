

<template>
  <!--
    This was created based on the Dribble shot by Deepak Yadav that you can find at https://goo.gl/XRALsw
    I'm @hk95 on GitHub. Feel free to message me anytime.
  -->

  <section class="user">
    <div class="user_options-container">
      <div class="user_options-text">
        <div class="user_options-unregistered">
          <h2 class="user_unregistered-title">还没注册？</h2>
          <p class="user_unregistered-text">注册账号后，您可以享受我们的快捷低价的法律服务，不再为大大小小的侵权事件而担忧——</p>
          <button class="user_unregistered-signup" id="signup-button">去注册</button>
        </div>

        <div class="user_options-registered">
          <h2 class="user_registered-title">已经注册？</h2>
          <p class="user_registered-text">现在登录，享受我们一站式解决法律问题的方便与快捷，全中国的律师为您保驾护航——</p>
          <button class="user_registered-login" id="login-button">去登录</button>
        </div>
      </div>

      <div class="user_options-forms" id="user_options-forms">
        <div class="user_forms-login">
          <h2 class="forms_title">登录</h2>
          <form class="forms_form">
            <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input type="text" v-model="loginRequest.userAccount" placeholder="请输入用户名" class="forms_field-input" autocomplete="on" required autofocus />

              </div>
              <div class="forms_field">
                <input type="password" v-model="loginRequest.userPassword" placeholder="请输入密码" class="forms_field-input" autocomplete="on" @keyup.enter.native="handleLogin" required />
              </div>
            </fieldset>
            <div class="forms_buttons">
              <button type="button" class="forms_buttons-forgot" style="font-size: 20px" @click="back()">返回</button>
              <input type="submit" value="登录" class="forms_buttons-action" @click.native.prevent="handleLogin">
            </div>
          </form>
        </div>
        <div class="user_forms-signup">
          <h2 class="forms_title">注册</h2>
          <form class="forms_form">
            <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input type="text" placeholder="请输入用户名" v-model="registerRequest.userAccount" class="forms_field-input" required />
              </div>
              <div class="forms_field">
                <input type="password" placeholder="请输入密码" v-model="registerRequest.userPassword" class="forms_field-input" required />
              </div>
              <div class="forms_field">
                <input type="password" placeholder="请再次输入密码" v-model="registerRequest.checkPassword" class="forms_field-input" @keyup.enter.native="handleLogin" required />
              </div>
              <div class="forms_field">
                <el-select v-model="registerRequest.identity" placeholder="请选择您的身份">
                  <el-option label="当事人" value="当事人" />
                  <el-option label="律师" value="律师" />
                </el-select>
              </div>
            </fieldset>
            <div class="forms_buttons">
              <input type="submit" value="注册" class="forms_buttons-action" @click.native.prevent="handleRegister">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="sass" scoped>
/**
 * General variables
 */
$bdrds: 3px

$white: #fff
$black: #000
$gray: #ccc
$salmon: #e8716d
$smoky-black: #332884

$ff: 'Montserrat', sans-serif
$ff-body: 12px
$ff-light: 300
$ff-regular: 400
$ff-medium: 500



/**
 * General configs
 */
*
  box-sizing: border-box

body
  font-family: $ff
  font-size: $ff-body
  line-height: 1em

button
  background-color: transparent
  padding: 0
  border: 0
  outline: 0
  cursor: pointer

input
  background-color: transparent
  padding: 0
  border: 0
  outline: 0

  &[type="submit"]
    cursor: pointer

  &::placeholder
    font-size: .85rem
    font-family: $ff
    font-weight: $ff-light
    letter-spacing: .1rem
    color: $gray


/**
 * Bounce to the left side
 */
@keyframes bounceLeft
  0%
    transform: translate3d(100%, -50%, 0)

  50%
    transform: translate3d(-30px, -50%, 0)

  100%
    transform: translate3d(0, -50%, 0)

/**
 * Bounce to the left side
 */
@keyframes bounceRight
  0%
    transform: translate3d(0, -50%, 0)

  50%
    transform: translate3d(calc(100% + 30px), -50%, 0)

  100%
    transform: translate3d(100%, -50%, 0)

/**
 * Show Sign Up form
 */
@keyframes showSignUp
  100%
    opacity: 1
    visibility: visible
    transform: translate3d(0, 0, 0)


/**
 * Page background
 */
.user
  display: flex
  justify-content: center
  align-items: center

  width: 100%
  height: 100vh
  background: #ccc
  background-size: cover

  &_options-container
    position: relative
    width: 80%

  &_options-text
    display: flex
    justify-content: space-between
    width: 100%
    background-color: $smoky-black
    border-radius: $bdrds


/**
 * Registered and Unregistered user box and text
 */
.user_options-registered,
.user_options-unregistered
  width: 50%
  padding: 75px 45px

  color: $white
  font-weight: $ff-light

.user_registered-title,
.user_unregistered-title
  margin-bottom: 15px
  font-size: 1.66rem
  line-height: 1em

.user_unregistered-text,
.user_registered-text
  font-size: .83rem
  line-height: 1.4em

.user_registered-login,
.user_unregistered-signup
  margin-top: 30px
  border: 1px solid $gray
  border-radius: $bdrds
  padding: 10px 30px

  color: $white
  text-transform: uppercase
  line-height: 1em
  letter-spacing: .2rem

  transition: background-color .2s ease-in-out, color .2s ease-in-out

  &:hover
    color: $smoky-black
    background-color: $white


/**
 * Login and signup forms
 */
.user_options-forms
  position: absolute
  top: 50%
  left: 30px

  width: calc(50% - 30px)
  min-height: 420px
  background-color: $white
  border-radius: $bdrds
  box-shadow: 2px 0 15px rgba($black, .25)
  overflow: hidden

  transform: translate3d(100%, -50%, 0)
  transition: transform .4s ease-in-out

  .user_forms-login
    transition: opacity .4s ease-in-out, visibility .4s ease-in-out

  .forms
    &_title
      margin-bottom: 45px

      font-size: 1.5rem
      font-weight: $ff-medium
      line-height: 1em
      text-transform: uppercase
      color: $salmon
      letter-spacing: .1rem

    &_field
      &:not(:last-of-type)
        margin-bottom: 20px

    &_field-input
      width: 100%
      border-bottom: 1px solid $gray
      padding: 6px 20px 6px 6px

      font-family: $ff
      font-size: 1rem
      font-weight: $ff-light
      color: darken($gray, 30%)
      letter-spacing: .1rem

      transition: border-color .2s ease-in-out

      &:focus
        border-color: darken($gray, 30%)

    &_buttons
      display: flex
      justify-content: space-between
      align-items: center

      margin-top: 35px

      &-forgot
        font-family: $ff
        letter-spacing: .1rem
        color: $gray
        text-decoration: underline

        transition: color .2s ease-in-out

        &:hover
          color: darken($gray, 10%)

      &-action
        background-color: $salmon
        border-radius: $bdrds
        padding: 10px 35px

        font-size: 1rem
        font-family: $ff
        font-weight: $ff-light
        color: $white
        text-transform: uppercase
        letter-spacing: .1rem

        transition: background-color .2s ease-in-out

        &:hover
          background-color: darken($salmon, 10%)






  .user_forms-login
    position: absolute
    top: 70px
    left: 40px

    width: calc(100% - 80px)

    opacity: 0
    visibility: hidden
    transition: opacity .4s ease-in-out, visibility .4s ease-in-out, transform .5s ease-in-out

  .user_forms-signup
    position: absolute
    top: 20px
    left: 40px

    width: calc(100% - 80px)

    opacity: 0
    visibility: hidden
    transition: opacity .4s ease-in-out, visibility .4s ease-in-out, transform .5s ease-in-out
    transform: translate3d(120px, 0, 0)

    .forms_buttons
      justify-content: flex-end

  .user_forms-login
    transform: translate3d(0, 0, 0)
    opacity: 1
    visibility: visible


/**
 * Triggers
 */
.user_options-forms
  &.bounceLeft
    animation: bounceLeft 1s forwards

    .user_forms-signup
      animation: showSignUp 1s forwards

    .user_forms-login
      opacity: 0
      visibility: hidden
      transform: translate3d(-120px, 0, 0)

  &.bounceRight
    animation: bounceRight 1s forwards


/**
 * Responsive 990px
 */
@media screen and (max-width: 990px)
  .user_options-forms
    min-height: 350px

    .forms_buttons
      flex-direction: column

    .user_forms-login
      .forms_buttons-action
        margin-top: 30px

    .user_forms-signup,
    .user_forms-login
      top: 40px

  .user_options-registered,
  .user_options-unregistered
    padding: 50px 45px

</style>


<script setup>
import {onMounted} from "vue";
import { reactive } from 'vue'
import myAxios from "../plugins/myAxios";
import { useRouter } from 'vue-router'

const router = useRouter()

let loginRequest = reactive({
  userAccount: '',
  userPassword: ''
})




const handleLogin = async () => {
  const res = await myAxios.post('/login',{
    userAccount:loginRequest.userAccount,
    userPassword:loginRequest.userPassword,
  })
  console.log("res="+res.userAccount)
  console.log("idenity="+res.idenity)
  await window.sessionStorage.setItem('token', res.token);
  await window.sessionStorage.setItem('userAccount',res.userAccount);
  await window.sessionStorage.setItem('user',JSON.stringify(res));
  await window.sessionStorage.setItem('idenity',res.idenity);
  router.push({
    path: '/Main'
  });
}


const handleLogin2 = async () => {
  const res = await myAxios.post('/login',{
    userAccount:loginRequest.userAccount,
    userPassword:loginRequest.userPassword,
  })
  console.log("res="+res.userAccount)
  console.log("idenity="+res.idenity)
  await window.sessionStorage.setItem('token', res.token);
  await window.sessionStorage.setItem('userAccount',res.userAccount);
  await window.sessionStorage.setItem('user',JSON.stringify(res));
  await window.sessionStorage.setItem('idenity',res.idenity);
  router.push({
    path: '/Main'
  });
}


const back = async () =>{
  router.back();
}




let registerRequest = reactive({
  userAccount: '',
  userPassword:'',
  checkPassword:'',
  identity:''
})

const handleRegister = async () => {
  const newUserId = await myAxios.post('/register',{
    userAccount:registerRequest.userAccount,
    userPassword:registerRequest.userPassword,
    checkPassword:registerRequest.checkPassword,
    identity:registerRequest.identity
  })

  loginRequest.userAccount = registerRequest.userAccount;
  loginRequest.userPassword = registerRequest.userPassword;
  alert("注册成功!")
  await handleLogin2();

  console.log(newUserId)

  router.replace({
    path: '/Main'
  });
}











onMounted(async ()=>{
  /**
   * Variables
   */
  const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

  /**
   * Add event listener to the "Sign Up" button
   */
  signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
  }, false)

  /**
   * Add event listener to the "Login" button
   */
  loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
  }, false)
})



</script>
