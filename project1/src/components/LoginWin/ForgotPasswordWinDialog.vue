<template>
  <el-dialog v-model="forgetPasswordWinShow" @close="$emit('cancelForgetPassword')" title="忘记密码" width="35%" align-center center>
      <el-form>
        <el-form-item label="用户名" :label-width="80">
          <el-input v-model="User.Name"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="80">
          <el-input v-model="User.NewPassword"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="login-footer">
          <el-button @click="$emit('cancelForgetPassword')">取消</el-button>
          <el-button type="primary" @click="$emit('forgetPasswordEvent',User)"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['cancelForgetPassword', 'forgetPasswordEvent'])
const props = defineProps({
  forgetPasswordWin: Boolean,
})
const forgetPasswordWinShow = ref(props.forgetPasswordWin)
const User = ref({
  Name: '',
  NewPassword:'',
})
</script>

<style scoped>

</style>