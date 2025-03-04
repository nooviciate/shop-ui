<template>
  <el-dialog v-model="registerWinShow" @close="$emit('cancelRegister')" title="用户注册" width="35%" align-center center>
    <el-form>
      <el-form-item label="用户名" :label-width="80">
        <el-input v-model="newUser.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="80">
        <el-input v-model="newUser.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
        <div class="register-footer">
          <el-button @click="$emit('cancelRegister')">取消</el-button>
          <el-button type="primary" @click="$emit('registerEvent', newUser)"> 注册 </el-button>
        </div>
      </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  registerWin: Boolean,
})
const registerWinShow = ref(props.registerWin)

const newUser = ref({
  name: '',
  password: '',
})

</script>

<style></style>