<template>
  <el-container>
    <el-header>
      <template v-if="!User.LoginState">
        <el-menu mode="horizontal" :ellipsis="false" :router="true">
          <el-menu-item index="/" style="background-color: deepskyblue">
            <img style="width: 100px" src="https://go.dev/images/go-logo-white.svg" />
          </el-menu-item>
          <el-menu-item index="/Home">首页</el-menu-item>
          <el-menu-item index="/ProductUser">商品分类</el-menu-item>
          <el-menu-item @click="loginWin = true">登录</el-menu-item>
          <el-menu-item @click="registerWin = true">注册</el-menu-item>
          <el-menu-item @click="forgetPasswordWin = true">忘记密码</el-menu-item>
        </el-menu>
      </template>
      <template v-else-if="User.LoginState">
        <el-menu mode="horizontal" :ellipsis="false" :router="true">
          <el-menu-item index="/" style="background-color: deepskyblue">
            <img style="width: 100px" src="https://go.dev/images/go-logo-white.svg" />
          </el-menu-item>
          <el-menu-item index="/Home">首页</el-menu-item>
          <el-menu-item index="/ProductUser">商品目录</el-menu-item>
          <el-avatar :size="38" :src="User.UserData.avaURL" :fit="'cover'" style="position: relative; top:10px;" />
          <el-menu-item> 个人中心 </el-menu-item>
          <el-menu-item @click="LoginState = false"> 退出 </el-menu-item>
        </el-menu>
      </template>
      <!-- <template v-else-if="User.LoginState && User.Type === '管理员'">
        <el-menu mode="horizontal" :ellipsis="false" :router="true">
          <el-menu-item index="/" style="background-color: deepskyblue">
            <img style="width: 100px" src="https://go.dev/images/go-logo-white.svg" />
          </el-menu-item>
          <el-menu-item index="/Home">首页</el-menu-item>
          <el-menu-item index="/ProductAdmin">商品列表</el-menu-item>
          <el-avatar :size="38" :src="User.UserData.avaURL" :fit="'cover'" style="position: relative; top:10px;" />
          <el-menu-item> 个人中心 </el-menu-item>
          <el-menu-item @click="LoginState = false"> 退出 </el-menu-item>
        </el-menu>
      </template> -->
    </el-header>
    <!-- 内容部分 -->
    <el-main>
      <el-scrollbar height="100vh" always>
        <router-view></router-view>
      </el-scrollbar>
    </el-main>


    <!--登录窗口-->
    <LoginWinDialog v-if="loginWin" :loginWin="loginWin" @cancel-login="loginWin = false"
      @user-login-event="userLoginEvent" @admin-login-event="AdminLoginEvent" />
    <!--注册窗口-->
    <RegisterWinDialog v-if="registerWin" :registerWin="registerWin" @cancel-register="registerWin = false"
      @register-event="registerEvent" />
    <!--忘记密码窗口-->
    <ForgotPasswordWinDialog v-if="forgetPasswordWin" :forgetPasswordWin="forgetPasswordWin"
      @cancel-forget-password="forgetPasswordWin = false" @forget-password-event="forgetPasswordEvent" />
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useLoginStore } from "./piniaState/useLogStore";
import LoginWinDialog from "./components/LoginWin/LoginWinDialog.vue";
import RegisterWinDialog from "./components/LoginWin/RegisterWinDialog.vue";
import ForgotPasswordWinDialog from "./components/LoginWin/ForgotPasswordWinDialog.vue";
//登录、注册、忘记密码窗口显示状态
let loginWin = ref(false);
let registerWin = ref(false);
let forgetPasswordWin = ref(false);

//账号信息
const User = useLoginStore().User;
//登录、注册、忘记密码事件
//用户登录事件
const userLoginEvent = () => {
  axios
    .post("/post/userLogin", {
      Name: User.Nameame,
      Password: User.Password,
      Type: User.Type,
    })
    .then(function (res) {
      console.log(res.data);
      loginWin.value = false;//成功登录，窗口消失
      User.LoginState = true;
      UserType.value = res.data.type;
      User.UID = res.data.UID;//账户UID
      User.UserData = res.data.userData;//用户基础数据
    })
    .catch(function (err) {
      console.log(err);
      alert("登录失败");
    });
};
//管理员登录事件
const AdminLoginEvent = () => {
  axios.post('/post/adminLogin', {
    Name: User.Name,
    Password: User.Password,
    Type: User.Type,
  }).then(function (res) {
    console.log(res.data);
    loginWin.value = false;//成功登录，窗口消失
    User.LoginState = true;
    UserType.value = res.data.type;
    User.UID = res.data.UID;//账户UID
    User.UserData = res.data.userData;//用户基础数据
  }).catch(function (err) {
    console.log(err);
  })
}

//用户注册事件
const registerEvent = (newUser) => {
  axios.post('/post/register', {
    Name: newUser.Name,
    Password: newUser.Password,
  }).then(function (res) {
    console.log(res.data);
    registerWin.value = false;
    alert("注册成功");
  }).catch(function (err) {
    console.log(err);
  })
}

//用户忘记密码事件
const forgetPasswordEvent = (User) => {
  axios.post('/post/forgetPassword',{
    Name: User.Name,
    NewPassword: User.NewPassword,
  }).then(function (res){
    if(res.data){
      alert("密码重置成功，请重新登录");
    }
  }).catch(function (err){
    alert(err)
  })
}
</script>

<style>
.el-container {
  height: 100vh;
}

.el-main {
  padding: 0 50px;
}

.el-menu--horizontal>.el-menu-item:nth-child(3) {
  margin-right: auto;
}
</style>
