<template>
<div class="loginPage" >
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <!-- 邮箱 -->
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
  

  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <!-- 验证 -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" >注册</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  name: 'Resgiter', 
  
  
 data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (!/^[a-z0-9]+$/.test(value)) {
            callback(new Error('必须是小写字母数字字符'));
          } else{
            callback()
          }
        }, 1000);
      };
 
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkEmail=(rule, value, callback)=>{
          if(value===''){
            callback(new Error('请输入邮箱'));
          }else if(!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)){
            callback(new Error('请输入正确的邮箱'))
          }else{
            callback();
          }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          name: '',
          email:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
           email: [
            { validator: checkEmail, trigger: 'blur' }
          ]
        }
      };
       
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
             this.$router.push("/login");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        var userInfo={
          "name":this.ruleForm.name,
          "pass":this.ruleForm.pass
        }
        console.log('userInfo',userInfo);
        var userDetailInfo=JSON.parse(localStorage.getItem("userInfo")||'[]');
        userDetailInfo=userInfo
        localStorage.setItem("userInfo",JSON.stringify(userDetailInfo));
        console.log('userDetailInfo',userDetailInfo);
          this.$emit('userData')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
   
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
 