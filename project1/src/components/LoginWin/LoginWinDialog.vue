<template>
  <el-dialog v-model="loginWinShow" @close="$emit('cancelLogin')" width="35%" align-center center>
    <el-tabs stretch>
      <el-tab-pane label="用户登录">
        <el-form>
          <el-form-item label="用户名" :label-width="80">
            <el-input v-model="User.Name"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="80">
            <el-input v-model="User.Password"></el-input>
          </el-form-item>
        </el-form>
        <div class="login-footer" style="text-align: center;">
          <el-button @click="$emit('cancelLogin')">取消</el-button>
          <el-button type="primary" @click="$emit('userLoginEvent')">登录</el-button>
        </div>
      </el-tab-pane>

      <el-tab-pane label="管理员登录">
        <el-form>
          <el-form-item label="用户名" :label-width="80">
            <el-input v-model="User.Name"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="80">
            <el-input v-model="User.Password"></el-input>
          </el-form-item>
        </el-form>
        <div class="login-footer" style="text-align: center;">
          <el-button @click="$emit('cancelLogin')">取消</el-button>
          <el-button type="primary" @click="$emit('loginEvent')">登录</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>

  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useLoginStore } from '../../piniaState/useLogStore'

const User = useLoginStore().User
const emit = defineEmits(['cancelLogin', 'loginEvent'])
const props = defineProps({
  loginWin: Boolean,
})
const loginWinShow = ref(props.loginWin)
</script>

<style>

</style>